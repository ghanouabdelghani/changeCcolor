let div = document.querySelector("container")
newParagraph.textcontent="hello"
div.appendchild(newParagraph)

for (let index = 0; index < 100; index++) {
    newParagraph.textcontent=index
    div.appendchild(newParagraph)
    
    
}