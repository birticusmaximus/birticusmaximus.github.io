document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.grid');
    // Header titles
    const rowHeaders = ["", "Deepen Faith", "Instil Vision", "Set Culture", "Value Relationships", "Promote Best Practice"];
    const colHeaders = ["", "Courageous", "Creative", "Accountable", "Sustainable", "Kind"];

    // Correct mapping of contents to cells according to the specified rows
    const cellContents = [
        [], // Skip header row
        ["Trust", "Imagination", "Formation", "Consistent", "Gentle"], // Row 2
        ["Stretching", "Innovative", "Stewardship", "Just", "Inviting"], // Row 3
        ["Engaging", "Pathways", "Transparent", "Mentoring", "Inclusive"], // Row 4
        ["Candid", "Trusting", "Fair", "Paced", "Generous"], // Row 5
        ["Growth", "Flexibility", "Competence", "Training", "Considerate"] // Row 6
    ];

    // Descriptions for each cell, mapped by cell content
    const descriptions = {
        // Include all descriptions as before
      "Trust": "Leaders must be courageous enough to trust: trust Jesus, and trust each other. This is a work of vulnerability, but it leads to a deepened faith in both the God who leads us and the people we serve.",
        "Imagination": "To deepen in faith, is to widen our imaginations. As leaders, we must be able to see into the future with hope, and imagine a world that aligns with the heart of God.",
        "Formation": "A deep faith is marked by ongoing maturity. We are formed in Christ and in community through the scriptures, and by the Spirit, as we listen to the stories of others and allow them to hear ours.",
        "Consistent": "To be leaders across the long-term, we must be able to show up consistently. We must be authentically dependable, reliable, and predictable for those who need us.",
        "Gentle": "Our leadership vision is one that recognises that our faith is to be expressed with compassion, and that this leads to leaders whose strength is to be exercised for the benefit of others.",
        "Stretching": "We want to embody leadership that is courageous in its capacity, to both imagine possibilities, as well as taking the necessary risks to move us expectantly in the direction of our vision.",
        "Innovative": "As stewards of God's resources, we strive to be creative and innovative in asking the right questions, searching for answers, and finding creative solutions to problems.",
        "Stewardship": "As we look to the future, we want to be responsible stewards for all that God has given us. We recognise the people in our community have innate value, and we desire to hold them, and all that God has entrusted us diligently as wise custodians.",
        "Just": "For Leadership to last, and to lead to a better world, it must embody justice. It must be fair, empathetic, aspirational, and caring.",
        "Inviting": "Our leadership vision is not just for the elite, the supremely capable, or the ambitious. It is for all people – especially those who are vulnerable, or whose voices may not be heard.",
        "Engaging": "We have a mandate to engage the world around us in conversations that matter, as we establish a culture that embodies the love of Jesus.",
        "Pathways": "We recognise pathways are not necessarily linear, and we seek to provide a variety of pathways, where people can express their gifts and develop their capacity.",
        "Transparent": "For Leadership to succeed, everyone must be on the journey together. We want to invite people into the journey of Carey, showing them who we are, how we act, and what it means to participate in this community. We do not want to hide or pretend, but rather be honest about the challenge of the journey together.",
        "Mentoring": "To be good stewards of the people we are entrusted with, and to build culture over the long term, requires us to walk alongside others, to hear their stories, journey with them through trials and celebrations, and to provide a mechanism of support as they grow and flourish.",
        "Inclusive": "Our culture is one where all are not only welcome, but where they have a place, a role. Inclusion is at the heart of belonging and personal well-being, and we are a place where everyone can belong.",
        "Candid": "As relational leaders, we must be robust in our ability to speak honestly with those around us. We value relationship so much that we invite candid conversations as we continue to learn together and strive to be formed well, in Christ.",
        "Trusting": "Trust is the core of any relationship, and is central to our capacity to create a sustainable leadership vision.",
        "Fair": "A balance of stewardship and compassion that looks at not just the individual, but also the community.",
        "Paced": "Recognising that, as we are called to both be, and to do, we are mindful that action can both stall, or be frenetic. We seek to be intentional in balancing the being and doing so that what we do flows out of who we are.",
        "Generous": "We practice relationships that are open-handed, invitational and generous in the love that they offer to those around us.",
        "Growth": "All life is about growth and transformation. Sometimes bigger and sometimes deeper. We are a community that continues to look for growth and transformation in our journey together and as leaders, we seek it for ourselves and those we lead.",
        "Flexibility": "As leaders, we desire to be agile and responsive. We know that we are constantly responding to change in our world, our context, and in regard to the individual journeys of people.",
        "Competence": "What we do matters as it impacts people, so competence in character and craft is important.",
        "Training": "Training is as much about learning as about refinement of practice. We recognise and intentional learning posture, enables us to be good stewards of what God has entrusted to us.",
        "Considerate": "We all have a story and a journey and each story has a community. Leaders have responsibility for individuals as well as a team or community, and we need to be mindful of the needs of both. This requires us to listen deeply and think well as we act."
    };

    // Generate the grid
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');

            // Empty top-left cell for the grid layout
            if (row === 0 && col === 0) {
                cell.classList.add('header');
                cell.innerHTML = "&nbsp;"; // Non-breaking space for layout
            } 
            // Header row
            else if (row === 0) {
                cell.classList.add('header');
                cell.textContent = colHeaders[col];
            } 
            // Header column
            else if (col === 0) {
                cell.classList.add('header');
                cell.textContent = rowHeaders[row];
            } 
            // Content cells with descriptions
            else {
                const contentText = cellContents[row][col - 1]; // Adjust for header, fetching content
                cell.textContent = contentText;

                // Create and append the info box with the corresponding description
                if (descriptions[contentText]) { // Check if description exists for content
                    let infoBox = document.createElement('div');
                    infoBox.classList.add('info-box');
                    infoBox.textContent = descriptions[contentText]; // Set the detailed description
                    cell.appendChild(infoBox);
                }
            }

            grid.appendChild(cell);
        }
    }
});

