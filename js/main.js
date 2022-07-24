'use strict';
var info = [];
var container = $('#container');

fetch('data.json')
.then(data => data.json())
.then(data => {

    data.forEach((info, i) => {

        var box_content = $('<div/>', {
            'class': 'box box-content',
            'category': `${info.company}`
        });
        var logo = $('<img/>', {
            'class': 'logo',
            'alt': `${info.company}`,
            'src': `img/${info.company.toLowerCase().replace(/ /g,"-")}.svg`
        });
        var main_content = $('<div/>', {
            'class': 'main-content'
        });
        var main_company = $('<div/>', {
            'class': 'main-company'
        });
        var company = $('<h3/>', {
            'class': 'company',
            html: `${info.company}`
        });
        var new_text;
        if(info.new == true){
            new_text = 'NEW!';
        }else{
            new_text = 'none';
        }
        var new_ = $('<span/>', {
            'class': 'new',
            html: `${new_text}`,
            'style': `display:${new_text};`
        });
        var featured_text;
        if(info.featured == true){
            featured_text = 'FEATURED';
        }else{
            featured_text = 'none';
        }
        var featured_ = $('<span/>', {
            'class': 'featured',
            html: `${featured_text}`,
            'style': `display:${featured_text};`
        });
        var position = $('<h2/>', {
            'class': 'position',
            html: `${info.position}`
        });
        var description = $('<div/>', {
            'class': 'description'
        });
        var posted_at = $('<p/>', {
            'class': 'postedAt descript',
            html: `${info.postedAt}`
        });
        var middot1 = $('<p/>', {
            'class': 'descript',
            html: '<strong>&middot;</strong>'
        });
        var contract = $('<p/>', {
            'class': 'contract descript',
            html: `${info.contract}`
        });
        var middot2 = $('<p/>', {
            'class': 'descript',
            html: '<strong>&middot;</strong>'
        });
        var location = $('<p/>', {
            'class': 'location descript',
            html: `${info.location}`
        });
        var requires = $('<div/>', {
            'class': 'requires'
        });
        var role = $('<p/>', {
            'class': 'role require req',
            html: `${info.role}`
        });
        box_content.addClass(`${info.role.toLowerCase()}`);
        var level = $('<p/>', {
            'class': 'level require req',
            html: `${info.level}`
        });
        box_content.addClass(`${info.level.toLowerCase()}`);
        

        box_content.appendTo(container);
        logo.appendTo(box_content);
        main_content.appendTo(box_content);
        main_company.appendTo(main_content);
        company.appendTo(main_company);
        new_.appendTo(main_company);
        featured_.appendTo(main_company);
        position.appendTo(main_content);
        description.appendTo(main_content);
        posted_at.appendTo(description);
        middot1.appendTo(description);
        contract.appendTo(description);
        middot2.appendTo(description);
        location.appendTo(description);
        requires.appendTo(box_content);
        role.appendTo(requires);
        level.appendTo(requires);

        info.languages.forEach((language, i) => {
            var languages = $('<p/>', {
                'class': `languages require req ${language}`,
                html: `${language}`
            });
            box_content.addClass(`${language.toLowerCase()}`);
            languages.appendTo(requires);
        });

        info.tools.forEach((tool, i) => {
            var tools = $('<p/>', {
                'class': `tools require req ${tool}`,
                html: `${tool}`
            });
            box_content.addClass(`${tool.toLowerCase()}`);
            tools.appendTo(requires);
        }); 
    });

    var my_input = document.querySelectorAll('.req');
    my_input.forEach((skill) => {
        skill.addEventListener('click', () => {

            $(`.category[category="${skill.innerHTML.toLowerCase()}"]`).css('display', 'flex');
            $('.box-content').hide();
            $(`.${skill.innerHTML.toLowerCase()}`).css('display', 'flex');
        });
    });
    var clear = $('#clear');
    clear.click(() => {
        $('.category').hide('slow');
        $('.box-content').fadeIn('slow');
    });
});
