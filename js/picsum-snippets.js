// Snippet: picsum photo random
{
    const template = `https://picsum.photos/\${1:600}/\${2:400}`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"picsum photos ransom",
                            tabTrigger:"picsum random" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: picsum photo img
{
    const template = `<img src="https://picsum.photos/\${1:600}/\${2:400}" alt="">`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"picsum photos with tag",
                            tabTrigger:"picsum random" 
                        } ); 
        return variable; 
        } , 1 );

}