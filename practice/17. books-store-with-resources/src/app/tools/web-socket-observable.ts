import { Observable } from "rxjs";

export function webSocketObservable<T>(url: string): Observable<T> {
  return new Observable<T>((subscriber) => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      try {
        const data: T = JSON.parse(event.data);
        subscriber.next(data);
      } catch (error) {
        subscriber.error(error);
      }
    };

    socket.onerror = (error) => {
      subscriber.error(error);
    };

    socket.onclose = () => {
      subscriber.complete();
    };

    // Cleanup function to close the WebSocket connection
    return () => {
      socket.close();
    };
  });
}