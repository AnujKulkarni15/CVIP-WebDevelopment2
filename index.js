//HTML Code Textarea
var html = document.getElementById('html-editor')
//CSS Code Textarea
var css = document.getElementById('css-editor')
//JS Code Textarea
var js = document.getElementById('js-editor')
// Preview Iframe
var preview_panel = document.getElementById('preview-panel').contentWindow.document
// Run or Execute button
var compile = document.getElementById('execute_code')

var clear = document.getElementById('reset_code')

var my= " ";

// Compiling and Execute Code
compile.addEventListener('click', function(){
  preview_panel.open()
  preview_panel.writeln(`<style>${css.value}</style>`)
  preview_panel.writeln(`${html.value}`)
  preview_panel.writeln(`<script>${js.value}</script>`)

  preview_panel.close()
})

clear.addEventListener('click',function(){
  preview_panel.open();
  preview_panel.writeln(my);
  preview_panel.close();
})

