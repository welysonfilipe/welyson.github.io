// Conectando o formulário com uma planilha Google

const submitForms = (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const feedback = document.querySelector("#feedback").value;
    const form = document.querySelector("form")

    fetch('https://api.sheetmonkey.io/form/iXZiSdr3qhniGxpvsbaEDt', {
        
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({nome, email, feedback}),
    })
    .then(() => {
        alert('Feedback enviado com sucesso!');
        form.reset();
    })
    .catch((error) => {
        console.error('Erro ao enviar o feedback:', error);
        alert('Houve um problema ao enviar o feedback. Por favor, tente novamente.');
    });
}
document.querySelector('#feedbackForm').addEventListener("submit", submitForms);
