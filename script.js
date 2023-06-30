function toggleMode() {
  const html = document.documentElement

//verificação da classe. Se existe ele exclui, senão ele adiciona
//   if(html.classList.contains("light")) {
//     html.classList.remove("light")
//   }else {
//     html.classList.add("light")
//   }

//método toggle faz essa verificação automática, se tiver ele excluir senão ele add
  html.classList.toggle('light')
}