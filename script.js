   // Seleciona todos os itens da lista
        const listItems = document.querySelectorAll('.item-list li');
        // Seleciona todas as caixas de conteúdo
        const contentBoxes = document.querySelectorAll('.display-box');
        // Seleciona a mensagem inicial
        const initialMessage = document.getElementById('initial-message');

        // Adiciona um 'listener' de evento de clique a cada item da lista
        listItems.forEach(item => {
            item.addEventListener('click', function () {
                // 1. Oculta todos os conteúdos e remove a classe 'active' de todos os itens da lista
                contentBoxes.forEach(box => {
                    box.classList.remove('visible');
                });
                listItems.forEach(li => {
                    li.classList.remove('active');
                });

                // 2. Oculta a mensagem inicial, se estiver visível
                if (initialMessage) {
                    initialMessage.style.display = 'none';
                }

                // 3. Pega o ID do conteúdo alvo a partir do atributo 'data-target' do item clicado
                const targetId = this.getAttribute('data-target');

                // 4. Encontra e exibe o conteúdo alvo (adicionando a classe 'visible')
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('visible');
                }

                // 5. Adiciona a classe 'active' ao item da lista clicado para destaque
                this.classList.add('active');
            });
        });