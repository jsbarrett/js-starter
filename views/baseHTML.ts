const baseHTML = (content: any) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Todos</title>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-400">
      <div class="m-12 bg-white p-4 shadow-2xl">
        ${content}
      </div>
    </body>
  </html>
  `
}

export { baseHTML }
