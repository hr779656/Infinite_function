function main(){
    document.write("hellow world1")
    document.write("<br>")
    child()
}

function child(){
    document.write("hellow world2")
    document.write("<br>")
    main()
}

main()