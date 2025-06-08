import { Component, input, model, signal } from '@angular/core';
import { Book } from '../../models/book';
import { Busy } from "../busy/busy";

@Component({
  selector: 'app-books-list',
  imports: [Busy],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss',
})
export class BooksList {
  readonly selectedBookId = signal<string>('27eec969-1138-43c3-9e11-fe92cda1e892');

  readonly books = signal<Book[]>([
    {
      id: 'e58dca64-4099-4e28-bd62-a83e83782934',
      title: 'The Last Library',
      author: 'Author A. Example',
      description:
        'A thrilling mystery set in a forgotten village, where the last library holds secrets that could change the fate of its inhabitants. As strange events unfold, a determined librarian must uncover the truth before the past consumes them all.',
      stock: 80,
    },
    {
      id: '27eec969-1138-43c3-9e11-fe92cda1e892',
      title: 'Whispering Shadows',
      author: 'Author B. Example',
      description:
        'Science fiction meets classic adventure in this futuristic tale of a world divided by technology and tradition. When a young inventor discovers a hidden power, she must navigate dangerous alliances and unravel the mystery behind the whispering shadows.',
      stock: 64,
    },
    {
      id: 'c783f528-9ded-4a4b-9206-a0e20386ba6a',
      title: 'Infinite Horizon',
      author: 'Author C. Example',
      description:
        "A young girl's journey across parallel universes leads her to question the nature of reality and her own identity. Facing impossible choices and unexpected friendships, she must find her way home before the fabric of existence unravels.",
      stock: 6,
    },
    {
      id: '2936a7a4-ae8e-42e6-82ae-c6616bb46b8f',
      title: 'Code of the Ancients',
      author: 'Author D. Example',
      description:
        'A detective unravels the secrets of a haunted library, where ancient codes and cryptic messages point to a forgotten civilization. As the mystery deepens, he must confront his own past to unlock the truth and save the future.',
      stock: 29,
    },
    {
      id: '6c2f2e0d-6063-45c7-ad36-cfd1f90dab83',
      title: 'Lost in Lore',
      author: 'Author E. Example',
      description:
        'Epic fantasy with dragons, magic, and ancient curses. When a young scribe discovers a forbidden text, she is thrust into a world of danger and intrigue, where the fate of kingdoms rests on her courage and the power of forgotten lore.',
      stock: 8,
    },
    {
      id: '46e80dcf-c305-4fb4-84a5-5380c2649b8e',
      title: 'Echoes of Tomorrow',
      author: 'Author F. Example',
      description:
        'A heartwarming story of friendship and hope, set in a world where memories can be rewritten. As two unlikely companions journey through time, they discover that the echoes of tomorrow are shaped by the choices they make today.',
      stock: 56,
    },
    {
      id: '7d26b753-d6c5-4f9a-81cf-2e99ab19ec60',
      title: 'The Forgotten Realm',
      author: 'Author G. Example',
      description:
        'Time travel, betrayal, and redemption intertwine in this gripping tale. When a historian stumbles upon a portal to a lost world, she must confront ancient enemies and her own regrets to restore balance and find her way back.',
      stock: 77,
    },
    {
      id: 'a3fe0ebd-cd1a-42f8-8dfe-0f7c14065fab',
      title: 'The Quantum Paradox',
      author: 'Author H. Example',
      description:
        'An AI gains consciousness and questions its existence, setting off a chain of events that challenges the boundaries between human and machine. As reality bends, a group of scientists must decide what it truly means to be alive.',
      stock: 100,
    },
    {
      id: '22d0eb40-8df0-46d6-9681-e12bb578acc2',
      title: 'Midnight Sun',
      author: 'Author I. Example',
      description:
        'A poet discovers the secret to immortality hidden within the verses of an ancient manuscript. As he journeys across continents and centuries, he must choose between eternal life and the love that gives his existence meaning.',
      stock: 89,
    },
    {
      id: 'e1114979-b4c8-4d15-b99f-03bc181e2642',
      title: "The Dreamer's Diary",
      author: 'Author J. Example',
      description:
        'A lost artifact that could change the world forever falls into the hands of a reluctant hero. Guided by cryptic dreams and haunted by his past, he embarks on a quest that will test his courage and reshape his destiny.',
      stock: 99,
    },
    {
      id: '5b0d9b8a-3036-4fb9-8a89-69310c79dddc',
      title: 'Beneath the Surface',
      author: 'Author K. Example',
      description:
        'Romance blossoms in a world at war, where two souls from opposing sides find common ground. As secrets unravel and loyalties are tested, they must decide if love can truly conquer the darkness that threatens to tear them apart.',
      stock: 55,
    },
    {
      id: '849f4bbb-c314-47df-9632-984eb3d3f6c4',
      title: 'Tides of Time',
      author: 'Author L. Example',
      description:
        'Ancient relics, secret societies, and high-speed chases collide in this globe-trotting adventure. A brilliant archaeologist races against time to prevent a powerful artifact from falling into the wrong hands, risking everything for the truth.',
      stock: 25,
    },
    {
      id: '7ac9b27c-152d-478a-8d75-447765f0b9da',
      title: 'Fragments of Infinity',
      author: 'Author M. Example',
      description:
        'A brilliant hacker faces the ultimate test when a mysterious code threatens to unravel reality itself. As she delves deeper, she uncovers secrets that blur the line between the digital and the real, forcing her to confront her own fears.',
      stock: 82,
    },
    {
      id: '769523a1-34a7-4b78-ae16-e49cb758dda4',
      title: 'The Moonlit Path',
      author: 'Author N. Example',
      description:
        'When dreams begin to predict the future, a young artist must decipher their meaning before disaster strikes. Guided by cryptic visions and unlikely allies, she embarks on a journey that will change her life and the fate of her city.',
      stock: 86,
    },
    {
      id: '6f8a60b2-2a49-4a45-978a-d2a4b36c380d',
      title: 'Beyond the Veil',
      author: 'Author O. Example',
      description:
        'A coming-of-age story in a post-apocalyptic landscape, where survival means facing both external threats and inner demons. As friendships are forged and lost, a group of teens must find hope in a world that has forgotten it.',
      stock: 70,
    },
    {
      id: 'cfc25521-aedd-416c-b233-fdab12017b41',
      title: 'Chasing Stardust',
      author: 'Author P. Example',
      description:
        'A deep dive into the mind of a genius inventor whose creations blur the line between science and magic. When a rival threatens to steal his greatest idea, he must confront his past and embrace the future he once feared.',
      stock: 40,
    },
    {
      id: 'fee5d7e2-b95f-4082-9c27-f6202e90912b',
      title: 'The Ember Key',
      author: 'Author Q. Example',
      description:
        'Heists, puzzles, and lost treasures await a daring crew as they race to unlock the secrets of the Ember Key. With danger at every turn, alliances are tested and only the cleverest will survive to claim the ultimate prize.',
      stock: 94,
    },
    {
      id: 'f016b130-5872-4f92-8649-188dfc15f95b',
      title: 'Voices from the Deep',
      author: 'Author R. Example',
      description:
        'A magical realism journey through grief and healing, where the ocean whispers secrets to those willing to listen. A grieving family finds hope and connection as they unravel the mysteries hidden beneath the waves.',
      stock: 28,
    },
    {
      id: 'dc10fd5f-956f-4752-8681-9c8134fb4073',
      title: 'Journey to Nowhere',
      author: 'Author S. Example',
      description:
        'An astronaut stranded on a distant moon must rely on ingenuity and courage to survive. As hope fades and rescue seems impossible, she discovers that the greatest journey is the one within herself.',
      stock: 57,
    },
    {
      id: '188be7ef-d3a6-4831-9de3-9fc6b9b9f377',
      title: "The Alchemist's Gift",
      author: 'Author T. Example',
      description:
        'A cursed family and the price of breaking the spell are at the heart of this enchanting tale. When a young alchemist discovers her true power, she must choose between saving her loved ones and changing fate itself.',
      stock: 20,
    },
    {
      id: 'a02af954-373f-4913-a078-9c6e42e72e24',
      title: 'A Song of Circuits',
      author: 'Author U. Example',
      description:
        'When art becomes a matter of life and death, a gifted musician and a rogue AI join forces to save their world. Together, they must outwit powerful enemies and unlock the music that binds their destinies.',
      stock: 85,
    },
    {
      id: '302b1f87-0141-470a-9774-30515d61faeb',
      title: 'Painting the Silence',
      author: 'Author V. Example',
      description:
        'Secrets hidden in plain sight are revealed through the brushstrokes of a reclusive artist. As her paintings gain fame, she must confront the past she tried to forget and the truth that could set her free.',
      stock: 9,
    },
    {
      id: '3ad9ee33-313c-4b09-8c4b-d8c9d4144952',
      title: 'The Glass Fortress',
      author: 'Author W. Example',
      description:
        'A fortress built from glass hides the truth about a forgotten kingdom. When a young prince seeks answers, he uncovers a legacy of betrayal and sacrifice that will shape the future of his people.',
      stock: 49,
    },
    {
      id: '19e77d70-3e88-436d-9fca-9d60d141b37d',
      title: "Gravity's Child",
      author: 'Author X. Example',
      description:
        'A child who can bend gravity must save the world from impending disaster. As she learns to control her powers, she discovers the true meaning of family, friendship, and responsibility.',
      stock: 69,
    },
    {
      id: '3ee14e09-855e-4b91-a805-7db323566d85',
      title: 'Shadow of the Mountain',
      author: 'Author Y. Example',
      description:
        'A mountaineer haunted by past mistakes embarks on a perilous climb to seek redemption. Along the way, he faces both physical and emotional challenges that force him to confront the shadows within.',
      stock: 75,
    },
    {
      id: '66a3c3a9-b564-4c44-8fd0-bc44caa25aa0',
      title: "The Booksmith's Secret",
      author: 'Author Z. Example',
      description:
        'The craftsman who binds stories to reality holds the fate of worlds in his hands. When a powerful enemy seeks to rewrite history, he must protect the secrets hidden within his enchanted books.',
      stock: 7,
    },
    {
      id: '5268b8bf-38cd-41ff-898f-80bdf62e73a2',
      title: "The Timekeeper's Tale",
      author: 'Author [. Example',
      description:
        'Tales from a clockmaker who can stop time, weaving together the destinies of those who seek his help. Each tick of the clock brings new challenges and unexpected twists for those who dare to change their fate.',
      stock: 96,
    },
    {
      id: '16332906-7c00-4fc8-ac36-fe86b0ba7d01',
      title: 'Gates of Eden',
      author: 'Author \\. Example',
      description:
        'The search for paradise in a fallen world leads a group of explorers through danger and wonder. Along the way, they must confront their own flaws and discover what it truly means to find Eden.',
      stock: 90,
    },
    {
      id: '928091f8-2a1b-4640-94c5-0ca17b294748',
      title: 'Mirrors of the Mind',
      author: 'Author ]. Example',
      description:
        'Reflections reveal more than just appearances in this psychological thriller. As a detective investigates a series of bizarre crimes, she must face her own fears and the secrets lurking within her mind.',
      stock: 20,
    },
    {
      id: 'fb674fb4-9bd6-43bb-b177-8c139ede472c',
      title: 'The Lantern Room',
      author: 'Author ^. Example',
      description:
        'A lighthouse keeper’s mysterious legacy draws a young woman to a windswept coast. As she unravels the past, she discovers that some lights are meant to guide—and others to warn of dangers yet to come.',
      stock: 63,
    },
  ]);
}
