// --- Theme Switcher Logic ---
const themeSelector = document.getElementById('theme-selector');
const codeBlock = document.getElementById('code-block'); // Select by ID

const themes = {
    default: {
        keyword: 'text-purple-400',
        class: 'text-yellow-400',
        function: 'text-blue-400',
        string: 'text-green-400',
        bg: 'from-surface to-background'
    },
    dracula: {
        keyword: 'text-[#ff79c6]',
        class: 'text-[#8be9fd]',
        function: 'text-[#50fa7b]',
        string: 'text-[#f1fa8c]',
        bg: 'bg-[#282a36]'
    },
    monokai: {
        keyword: 'text-[#f92672]',
        class: 'text-[#a6e22e]',
        function: 'text-[#66d9ef]',
        string: 'text-[#e6db74]',
        bg: 'bg-[#272822]'
    },
    github: {
        keyword: 'text-[#d73a49]',
        class: 'text-[#6f42c1]',
        function: 'text-[#005cc5]',
        string: 'text-[#032f62]',
        bg: 'bg-white'
    }
};

if (themeSelector && codeBlock) {
    themeSelector.addEventListener('change', (e) => {
        const theme = themes[e.target.value];
        const container = codeBlock.closest('.group'); // The main container background

        // Update Background
        // Reset background style and classes
        container.style.background = '';
        container.className = container.className.replace(/bg-\[#\w+\]|bg-white|from-surface|to-background|bg-gradient-to-br/g, '').trim();

        if (e.target.value === 'default') {
            container.classList.add('bg-gradient-to-br', 'from-surface', 'to-background');
        } else {
            // Check if it's a custom hex color class (which Tailwind JIT might not pick up dynamically if not safelisted)
            // or a standard class. For safety with arbitrary hexes in objects, inline style is better if JIT fails.
            // But here we defined specific classes. Let's try adding the class first.
            if (theme.bg.startsWith('bg-[#')) {
                // Extract hex
                const hex = theme.bg.match(/\[(.*?)\]/)[1];
                container.style.backgroundColor = hex;
            } else {
                container.classList.add(...theme.bg.split(' '));
            }
        }

        // Update Syntax Highlighting
        const codeHTML = `
            <p><span class="${theme.keyword}">class</span> <span class="${theme.class}">AI_Engineer</span>:</p>
            <p class="pl-4"><span class="${theme.keyword}">def</span> <span class="${theme.function}">__init__</span>(self):</p>
            <p class="pl-8">self.stack = [<span class="${theme.string}">'Python'</span>, <span class="${theme.string}">'React'</span>, <span class="${theme.string}">'PyTorch'</span>]</p>
            <p class="pl-8">self.passion = <span class="${theme.string}">'Generative AI'</span></p>
            <br>
            <p class="pl-4"><span class="${theme.keyword}">def</span> <span class="${theme.function}">build_future</span>(self):</p>
            <p class="pl-8"><span class="${theme.keyword}">return</span> <span class="${theme.string}">"Scalable & Intelligent Solutions"</span></p>
        `;

        codeBlock.innerHTML = codeHTML;
    });
}
