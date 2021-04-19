// Snippet: uk-accordion
{
    const template =
`<ul uk-accordion="collapsible:\${1:true};multiple:\${2:false};">
<li class="uk-open">
    <a class="uk-accordion-title" href="#">Item 1</a>
    <div class="uk-accordion-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</li>
<li>
    <a class="uk-accordion-title" href="#">Item 2</a>
    <div class="uk-accordion-content">
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
    </div>
</li>
<li>
    <a class="uk-accordion-title" href="#">Item 3</a>
    <div class="uk-accordion-content">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
    </div>
</li>
</ul>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-accordion (UIkit)",
                            tabTrigger:"uk-accordion" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-alert
{
    const template = 
`<div uk-alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-alert (UIkit)",
                            tabTrigger:"uk-alert" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-alert with close
{
    const template =
`<div uk-alert>
<a class="uk-alert-close" uk-close></a>
<h3>Notice</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-alert with close (UIkit)",
                            tabTrigger:"uk-alert" 
                        } ); 
        return variable; 
        } , 1 );
}
// Snippet: uk-background-cover
{
    const template =
`<div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(https://picsum.photos/id/106/960/540);">
    <p class="uk-h4">Cover</p>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-background-cover (UIkit)",
                            tabTrigger:"uk-background" 
                        } ); 
        return variable; 
        } , 1 );
}
// Snippet: uk-background-contain
{
    const template =
`<div class="uk-background-contain uk-background-muted uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url(https://picsum.photos/id/106/960/540);">
    <p class="uk-h4">Contain</p>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-background-contain (UIkit)",
                            tabTrigger:"uk-background" 
                        } ); 
        return variable; 
        } , 1 );
}
// Snippet: uk-badge
{
    const template = `<span class="uk-badge">1</span>`
    wp.hooks.addFilter( 
        'toolboxAceSnippets', 
        'toolbox' , 
        (variable) => {
            variable.push( { 
                                content:template,
                                name:"uk-badge (UIkit)",
                                tabTrigger:"uk-badge" 
                            } ); 
            return variable; 
            } , 1 );
}
// Snippet: uk-dropdown
{
    const template = 
`<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Hover</button>
    <div uk-dropdown>\${1:Text goes here}</div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Click</button>
    <div uk-dropdown="mode: click">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>`;
    wp.hooks.addFilter( 
                        'toolboxAceSnippets', 
                        'toolbox' , 
                        (variable) => {
                            variable.push( { 
                                                content:template,
                                                name:"uk-dropdown",
                                                tabTrigger:"uk-dropdown" 
                                            } ); 
                            return variable; 
                            } , 1 );
}
// Snippet: uk-breadcrumb
{
    const template =
`<ul class="uk-breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Linked Category</a></li>
    <li class="uk-disabled"><a>Disabled Category</a></li>
    <li><span>Lorem ipsum dolor sit amet.</span></li>
</ul>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-breadcrumb (UIkit)",
                            tabTrigger:"uk-breadcrumb" 
                        } ); 
        return variable; 
        } , 1 );
}
// Snippet: uk-button
{
    const template = `<button class="uk-button uk-button-\${1:default}">Click here</button>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-button (UIkit)",
                            tabTrigger:"uk-button" 
                        } ); 
        return variable; 
        } , 1 );
}
// Snippet: uk-button large
{
    const template = `<button class="uk-button uk-button-\${1:default} uk-button-large">Click here</button>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-button large (UIkit)",
                            tabTrigger:"uk-button" 
                        } ); 
        return variable; 
        } , 1 );
}
// Snippet: uk-button group
{
    const template = 
`<div>
    <div class="uk-button-group">
        <button class="uk-button uk-button-primary">Button</button>
        <button class="uk-button uk-button-primary">Button</button>
        <button class="uk-button uk-button-primary">Button</button>
    </div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-button group (UIkit)",
                            tabTrigger:"uk-button" 
                        } ); 
        return variable; 
        } , 1 );
}
// Snippet: uk-button wide
{
    const template = `<button class="uk-button uk-button-\${1:default} uk-width-1-1">Click here</button>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-button wide (UIkit)",
                            tabTrigger:"uk-button" 
                        } ); 
        return variable; 
        } , 1 );
}
// Snippet: uk-card
{
    const template =
`<div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
<h3 class="uk-card-title">Default</h3>
<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-card",
                            tabTrigger:"uk-card (UIkit)" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-card header and footer
{
    const template =
`<div class="uk-card uk-card-default uk-width-1-2@m">
<div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
            <img class="uk-border-circle" width="40" height="40" src="images/avatar.jpg">
        </div>
        <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
            <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
        </div>
    </div>
</div>
<div class="uk-card-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>
<div class="uk-card-footer">
    <a href="#" class="uk-button uk-button-text">Read more</a>
</div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-card header & footer (UIkit)",
                            tabTrigger:"uk-card" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-card media top
{
    const template =
`<div>
    <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
            <img src="images/light.jpg" alt="">
        </div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-card media top (UIkit)",
                            tabTrigger:"uk-card" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-card media bottom
{
    const template =
`<div>
    <div class="uk-card uk-card-default">
        <div class="uk-card-body">
            <h3 class="uk-card-title">Media Bottom</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div class="uk-card-media-bottom">
            <img src="images/light.jpg" alt="">
        </div>
    </div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-card media bottom (UIkit)",
                            tabTrigger:"uk-card" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-card media left
{
    const template =
`<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
<div class="uk-card-media-left uk-cover-container">
    <img src="images/light.jpg" alt="" uk-cover>
    <canvas width="600" height="400"></canvas>
</div>
<div>
    <div class="uk-card-body">
        <h3 class="uk-card-title">Media Left</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
</div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-card media left (UIkit)",
                            tabTrigger:"uk-card" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-card media right
{
    const template =
`<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
<div class="uk-flex-last@s uk-card-media-right uk-cover-container">
    <img src="images/light.jpg" alt="" uk-cover>
    <canvas width="600" height="400"></canvas>
</div>
<div>
    <div class="uk-card-body">
        <h3 class="uk-card-title">Media Right</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
</div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-card media right (UIkit)",
                            tabTrigger:"uk-card" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-column
{
    const template = 
`<div class="uk-column-1-\${1:2}@s uk-column-1-\${2:3}@m">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-column (UIkit)",
                            tabTrigger:"uk-column" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-countdown
{
    const template = 
`<div class="uk-grid-small uk-child-width-auto uk-margin" uk-grid uk-countdown="date: 2021-04-25T17:13:34+00:00">
    <div>
        <div class="uk-countdown-number uk-countdown-days"></div>
    </div>
    <div>
        <div class="uk-countdown-number uk-countdown-hours"></div>
    </div>
    <div>
        <div class="uk-countdown-number uk-countdown-minutes"></div>
    </div>
    <div>
        <div class="uk-countdown-number uk-countdown-seconds"></div>
    </div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-countdown (UIkit)",
                            tabTrigger:"uk-countdown" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-filter
{
    const template =
`<div uk-filter="target: .js-filter">

<ul class="uk-subnav uk-subnav-pill">
    <li uk-filter-control=".tag-white"><a href="#">White</a></li>
    <li uk-filter-control=".tag-blue"><a href="#">Blue</a></li>
    <li uk-filter-control=".tag-black"><a href="#">Black</a></li>
</ul>

<ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
    <li class="tag-white">
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </li>
    <li class="tag-blue">
        <div class="uk-card uk-card-primary uk-card-body">Item</div>
    </li>
    <li class="tag-white">
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </li>
    <li class="tag-white">
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </li>
    <li class="tag-black">
        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
    </li>
    <li class="tag-black">
        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
    </li>
    <li class="tag-blue">
        <div class="uk-card uk-card-primary uk-card-body">Item</div>
    </li>
    <li class="tag-black">
        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
    </li>
    <li class="tag-blue">
        <div class="uk-card uk-card-primary uk-card-body">Item</div>
    </li>
    <li class="tag-white">
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </li>
    <li class="tag-blue">
        <div class="uk-card uk-card-primary uk-card-body">Item</div>
    </li>
    <li class="tag-black">
        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
    </li>
</ul>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-filter (UIkit)",
                            tabTrigger:"uk-filter" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-lightbox
{
    const template = 
`<div uk-lightbox>
    <a class="uk-button uk-button-default" href="images/photo.jpg">Open Lightbox</a>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-lightbox (UIkit)",
                            tabTrigger:"uk-lightbox" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-marker dark
{
    const template = 
`<div class="uk-inline uk-dark">
    <img src="images/light.jpg" alt="">
    <a class="uk-position-absolute uk-transform-center" style="left: 20%; top: 30%" href="#" uk-marker></a>
    <a class="uk-position-absolute uk-transform-center" style="left: 60%; top: 40%" href="#" uk-marker></a>
    <a class="uk-position-absolute uk-transform-center" style="left: 80%; top: 70%" href="#" uk-marker></a>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-marker dark(UIkit)",
                            tabTrigger:"uk-marker" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-marker light
{
    const template = 
`<div class="uk-inline uk-light">
    <img src="images/dark.jpg" alt="">
    <a class="uk-position-absolute uk-transform-center" style="left: 20%; top: 30%" href="#" uk-marker></a>
    <a class="uk-position-absolute uk-transform-center" style="left: 60%; top: 40%" href="#" uk-marker></a>
    <a class="uk-position-absolute uk-transform-center" style="left: 80%; top: 70%" href="#" uk-marker></a>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-marker light(uikit)",
                            tabTrigger:"uk-marker" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-modal
{
    const template = 
`<!-- This is an anchor toggling the modal -->
<a href="#modal-example" uk-toggle>Open</a>

<!-- This is the modal -->
<div id="modal-example" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">Headline</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-primary" type="button">Save</button>
        </p>
    </div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-modal with close(UIkit)",
                            tabTrigger:"uk-modal" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-modal full
{
    const template = 
`<a class="uk-button uk-button-default" href="#modal-full" uk-toggle>Open</a>

<div id="modal-full" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
            <div class="uk-background-cover" style="background-image: url('images/photo.jpg');" uk-height-viewport></div>
            <div class="uk-padding-large">
                <h1>Headline</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-modal full(UIkit)",
                            tabTrigger:"uk-modal" 
                        } ); 
        return variable; 
        } , 1 );

}
// Snippet: uk-offcanvas
{
    const template = 
`<a href="#offcanvas-usage" uk-toggle>Open</a>
<div id="offcanvas-usage" uk-offcanvas>
    <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
</div>`
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-offcanvas (uikit)",
                            tabTrigger:"uk-offcanvas" 
                        } ); 
        return variable; 
        } , 1 );

}


// Snippet: uk-template
{
    const template = 
``
wp.hooks.addFilter( 
    'toolboxAceSnippets', 
    'toolbox' , 
    (variable) => {
        variable.push( { 
                            content:template,
                            name:"uk-template (uikit)",
                            tabTrigger:"uk-template" 
                        } ); 
        return variable; 
        } , 1 );

}

