---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default_home
---

<section id="about-me" markdown="1">
# Sobre mim

![Foto minha em frente ao prédio da IBM no Rio de Janeiro. Ao meu lado está uma placa quadrada, com o logotipo da IBM brando, num fundo preto.](/assets/pages/home/profile-picture.jpg){: .float-left}

Tenho <span id="age-count">22</span> anos, sou formado em **Sistemas de Informação** pela Universidade Federal do Estado do Rio de Janeiro (**UNIRIO**), e atualmente trabalho como desenvolvedor de software na **IBM**.

Meu foco é o desenvolvimento de sistemas back-end, e costumo trabalhar com **Java** e **Spring Boot**. Para o front-end, me sinto mais confortável utilizando **VueJS**. Utilizo essas tecnologias tanto no trabalho profissional quanto nos meus projetos pessoais.

Me manda um e-mail. [mateus@bandeira.dev](mailto:mateus@bandeira.dev).
</section>
<script>
    const today = new Date();
    const myBirthday = new Date("1999-12-28T00:00:00");
    const hasAgedThisYear = (myBirthday.getMonth() <= today.getMonth()) && (myBirthday.getDate() <= today.getDate());

    const age = today.getFullYear() - myBirthday.getFullYear() - (hasAgedThisYear ? 0 : 1);

    document.getElementById("age-count").textContent = age;
</script>
