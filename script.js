const bios = [
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
        text: "Bio for Image 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam velit. Nulla ut magna lobortis, egestas erat quis, aliquet est. Sed vel massa a felis imperdiet ultricies. Duis vel auctor arcu.",
        epubPath: 'epub_4'
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
