// Snippet: query-meta
{
    const template =
`{%
    set args = {
        'post_type'     : 'post',
        'numberposts'   : 10,
        'meta_query'    : {
            'relation'  :   {
                'first_clause'  : {
                    'key'       : '\${1:fieldname}',
                    'value'     : "now"|date('Ymd'),
                    'type'      : 'DATE',
                    'compare'   : '>=',
                }
            }
        } 
    }    
%}`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"Query Args with Meta",
                            tabTrigger:"query-meta" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: query-meta firstname lastname
{
    const template =
`{%
    set args = {
        'post_type'     : '\${1:post}',
        'numberposts'   : 10,
        'meta_query'    : {
            'relation'  :   {
                'first_name_clause'  : {
                    'key'       : '\${2:firstname}',
                    'compare'   : 'EXISTS',
                },
                'last_name_clause'  : {
                    'key'       : '\${3:lastname}',
                    'compare'   : 'EXISTS',
                }
            }
        },
        'orderby'   : {
            'last_name_clause'  : 'ASC',
            'first_name_clause' : 'ASC',
        }
    }    
%}`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"Query Args First- Lastname + ordering ",
                            tabTrigger:"query-first-last" 
                        } ); 
        return variable; 
        } , 1 );

}