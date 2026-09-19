let junkString: string = "Java seleium!@#45 Automation @#$%^&*$%Y"

junkString = junkString.replaceAll(/[^a-zA-Z0-9]/g, " ");
console.log(junkString);