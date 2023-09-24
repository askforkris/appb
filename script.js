lconst bios = [
    {
        text: "Bio for Astro:Bio for Astro: Astro's future depends on the American economy. Set in the 3001. His family must decide whether to relocate because of financial difficulties.",
        epubPath: '3001.epub'
    },
    {
        text: "Bio for Ciany: A girl from Colombia with a horrendous past that's comes to America for asylum and a better future.\n" +
                "Specific details goes in to the life of a drug Cartel living in Harlem . The second book written by Kriston Gooden . It ventures off in to pulp urban fiction..".",
        epubPath: 'Ciany.epub'
    },
    {
        text: "Bio for Duel intercept: A scientist willing to accomplish his goal by any means. Curing cancer has been his goal for twenty five years. Johnathan travels to the past to stop his old company from switching focus. His lies catch up with him when he has to rely on his old assistant Ms. Lin.",
        epubPath: 'Duel_intercept.epub'
    },
    {
        text: "Bio for Duel intercept continued: In "Unlocking Time: Secrets of the Unknown," journey into a world where the boundaries of reality are constantly shifting, and the doors to the past and future are waiting to be opened. This gripping narrative unfolds as a thrilling blend of science fiction, mystery, and intrigue, taking readers on an exhilarating ride through the uncharted territories of time.

Jonathan, a brilliant scientist, stumbles upon an astonishing discovery—a way to manipulate time itself. As he delves deeper into the mysteries of time travel, he finds himself entangled in a web of secrets, espionage, and potential extraterrestrial encounters. The keys to unlocking the truth lie within the confines of his research, but they come at a cost.

Mariam, his steadfast partner, undergoes a transformation that leads her on a quest for inner peace and a path less traveled. Their love story becomes a centerpiece of the narrative, as they navigate the complexities of their research, personal aspirations, and a world in which hidden agendas and rivalries abound.

When the CIA takes an interest in their groundbreaking work, the story takes a sharp turn, revealing the existence of locked doors to parallel dimensions and possible encounters with beings from beyond our world. As the characters race to uncover the truth, they are faced with choices that could alter the course of humanity.

"Unlocking Time: Secrets of the Unknown" is a tale of ambition, love, and the quest for knowledge, where doors to the past and future swing open, revealing a reality beyond imagination. Join Jonathan and Mariam on their journey to unlock the greatest mysteries of all—time itself..",
        epubPath: 'Duel_ chat_gpt.epub'
    }
];

function showOverlay(index) {
    // Set the bio text and download link href based on the selected index
    document.getElementById('bioText').textContent = bios[index].text;
    document.getElementById('downloadLink').href = bios[index].epubPath;

    // Show the overlay
    document.getElementById('imageOverlay').style.display = 'block';
}

function hideOverlay() {
    // Hide the overlay
    document.getElementById('imageOverlay').style.display = 'none';
}
