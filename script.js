document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita envio automático

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;

        // Validações simples
        if (!nome || !email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!validateEmail(email)) {
            alert("E-mail inválido.");
            return;
        }

        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // Simula criação de conta e redireciona
        alert("Conta criada com sucesso!");
        window.location.href = "home.html";
    });

    function validateEmail(email) {
        // Validação simples de e-mail
        const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        return re.test(email);
    }
});


//Configuração de perfil

        const fileInput = document.getElementById('fileInput');
        const uploadButton = document.querySelector('.upload-button');
        const profilePicturePreviewLarge = document.querySelector('.profile-picture-preview-large img');
        const profilePicturePreviewSmall = document.querySelector('.profile-image-preview img');
        const sobreTextarea = document.getElementById('sobre');
        const characterCount = document.querySelector('.character-count');

        uploadButton.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profilePicturePreviewLarge.src = e.target.result;
                    profilePicturePreviewLarge.style.display = 'block';
                    profilePicturePreviewSmall.src = e.target.result;
                    profilePicturePreviewSmall.style.display = 'block';
                }
                reader.readAsDataURL(file);
            } else {
                profilePicturePreviewLarge.style.display = 'none';
                profilePicturePreviewLarge.src = '';
                profilePicturePreviewSmall.style.display = 'none';
                profilePicturePreviewSmall.src = '';
            }
        });

        sobreTextarea.addEventListener('input', () => {
            const currentLength = sobreTextarea.value.length;
            characterCount.textContent = `Máximo de 200 caracteres (${currentLength})`;
        });


        //Configuração do login

document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('loginForm');
      const emailInput = document.getElementById('usuario');
      const senhaInput = document.getElementById('senha');

      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const senha = senhaInput.value;

        const savedEmail = localStorage.getItem('email');
        const savedSenha = localStorage.getItem('senha');

        if (email === savedEmail && senha === savedSenha) {
          alert('Login realizado com sucesso!');
          window.location.href = 'home.html';
        } else {
          alert('E-mail ou senha inválidos!');
        }
      });
    });
