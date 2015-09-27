$(document).ready(function(){
    // JS Array implementation, overlap mode
    var update = function() {
        var event = arguments[0],
            $menuLevelHolder = arguments[1],
            $item = arguments[2];
        var id;
        try{
                id = $item[0].getAttribute('id');
        }catch(e) {id=0;}
        $.ajax({
            url: '/getArticleByCategories/'+id,
            success: function(data) {
                var i;
                var intro = [];
                var info = [];
                var service = [];
                var q_a = [];
                var selector = '#accordion';
                $(selector +' div').remove();
                data = JSON.parse(data);
                console.log(data);
                for (i=0;i < data.length; i++) {
                    if (data[i]['section_id'] == 1) intro.push(data[i])
                    if (data[i]['section_id'] == 2) info.push(data[i])
                    if (data[i]['section_id'] == 3) service.push(data[i])
                    if (data[i]['section_id'] == 4) q_a.push(data[i])
                }
                var sec = [intro,info,service,q_a];
                var sectionClass = ['accordion-intro', 'accordion-info', 'accordion-service', 'accordion-question'];
                var sectionText = [
                    'Intro: What are Life Skills?',
                    'Info: Skills You Need',
                    'Service: Botvin Life Skills Training',
                    'Q&A When Do I Need Life Skills?'];
                var sectionName = [
                    'Intro: ',
                    'Info: ',
                    'Service: ',
                    'Q&A: '
                ];
                var sectionBody = [
                    "Sed ut at quo voluptas nulla pariatur?",
                    "But I th a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
                    "At vero repellat.",
                    "On the ways holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."

                ];
                var count = 0;
                for (var j=0;j<sec.length;j++){
                    var section_data = sec[j];
                    var title_class = sectionClass[j];
                    var collapse = count == 0 ? ' in' : ' ';

                    if (section_data.length == 0) {
                        $(selector).append(
                            "<div class='panel panel-default'><div class='panel-heading "+title_class+"'><h4 class='panel-title'>"+
                            "<a data-toggle='collapse' data-parent='#accordion' href='#xx"+j+"'>"+sectionText[j]+"</a>"+
                            "</h4></div>"+
                            "<div id='xx"+j+"' class='panel-collapse collapse "+collapse+" interactive_doc'>"+sectionBody+"</div>"+
                            "</div>");
                        count ++;
                    } else {
                        for (i=0;i<section_data.length ;i++) {
                            var appendStr =

                                "<div class='panel panel-default'><div class='panel-heading "+title_class+"'><h4 class='panel-title'>"+
                                "<a data-toggle='collapse' data-parent='#accordion' href='#x"+section_data[i].article_id+"' >"+sectionName[j]+section_data[i].title+"</a>"+
                                "</h4></div>"+
                                "<div id='x"+section_data[i].article_id+"' class='panel-collapse collapse "+collapse+" interactive_doc'>"+section_data[i].text+"</div>"+
                                "</div>";
                            $(selector).append(appendStr);
                            count++;
                        }
                    }
                }

                interactive_doc.updateElements();
                $('#pushobj div div div').css('width','10000px !important');
                $('.interactive_doc').on('change', function(){
                    interactive_doc.updateElements();
                });
                $('#test').html(data);
            },
            type: 'GET'
        });
    };
    $( '#menu' ).multilevelpushmenu({
        menu: arrMenu,
        containersToPush: [$( '#pushobj' )],
        mode: 'cover',

        // Just for fun also changing the look of the menu
        wrapperClass: 'mlpm_w',
        menuInactiveClass: 'mlpm_inactive',
        onGroupItemClick: update,
        onBackItemClick: update
    });

    $('#menu ')
});

// JS Aray instead HTML Markup

var arrMenu = [
    {
        title: 'Life Skills',
        id: 1,
        icon: 'fa fa-map-marker',
        items: [
            {
                name: 'Communication',
                id: 3,
                icon: 'fa fa-commenting-o',
                link: '#',
                items: [
                    {
                        title: 'Communication',
                        id: 3,
                        icon: 'fa fa-commenting-o',
                        link: '#',
                        items: [

                        ]
                    }
                ]
            },
            {
                name: 'Financial',
                id: 4,
                icon: 'fa fa-dollar',
                link: '#',
                items: [
                    {
                        title: 'Financial',
                        id: 4,
                        icon: 'fa fa-dollar',
                        items: [
                            {
                                name: 'Credit Score',
                                id: 14,
                                icon: 'fa fa-pie-chart',
                                link: '#',
                                items: [
                                    {
                                        title: 'Credit Score',
                                        id: 14,
                                        icon: 'fa fa-pie-chart',
                                        link: '#',
                                        items: [

                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Loans',
                                id: 15,
                                icon: 'fa fa-file-text-o',
                                link: '#',
                                items: [
                                    {
                                        title: 'Loans',
                                        id: 15,
                                        icon: 'fa fa-file-text-o',
                                        link: '#',
                                        items: [
                                            {
                                                name: 'Auto Loans',
                                                id: 18,
                                                icon: 'fa fa-car',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Auto Loans',
                                                        id:18,
                                                        icon: 'fa fa-car',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Mortgages',
                                                id: 15,
                                                icon: 'fa fa-home',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Mortgages',
                                                        id:15,
                                                        icon: 'fa fa-home',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Payday Loans',
                                                id:20,
                                                icon: 'fa fa-calendar',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Payday Loans',
                                                        id:20,
                                                        icon: 'fa fa-calendar',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Personal Loans',
                                                id:21,
                                                icon: 'fa fa-motorcycle',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Personal Loans',
                                                        id:21,
                                                        icon: 'fa fa-motorcycle',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Student Loans',
                                                id:22,
                                                icon: 'fa fa-university',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Student Loans',
                                                        id:22,
                                                        icon: 'fa fa-university',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Payment Methods',
                                id:16,
                                icon: 'fa fa-money',
                                link: '#',
                                items: [
                                    {
                                        title: 'Payment Methods',
                                        id:16,
                                        icon: 'fa fa-money',
                                        link: '#',
                                        items: [
                                            {
                                                name: 'Credit Card',
                                                id:24,
                                                icon: 'fa fa-credit-card',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Credit Card',
                                                        id:24,
                                                        icon: 'fa fa-credit-card',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Debit Card',
                                                id:25,
                                                icon: 'fa fa-credit-card',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Debit Card',
                                                        id:25,
                                                        icon: 'fa fa-credit-card',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Google Wallet',
                                                id:26,
                                                icon: 'fa fa-google-wallet',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Google Wallet',
                                                        id:26,
                                                        icon: 'fa fa-google-wallet',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Paypal',
                                                id:27,
                                                icon: 'fa fa-paypal',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Paypal',
                                                        id:27,
                                                        icon: 'fa fa-paypal',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Savings',
                                id:17,
                                icon: 'fa fa-line-chart',
                                link: '#',
                                items: [
                                    {
                                        title: 'Savings',
                                        id:17,
                                        icon: 'fa fa-line-chart',
                                        link: '#',
                                        items: [
                                            {
                                                name: '401k',
                                                id:28,
                                                icon: 'fa fa-building-o',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: '401k',
                                                        id:28,
                                                        icon: 'fa fa-building-o',
                                                        link: '#',
                                                        items: [
                                                            {
                                                                name: 'Company Match',
                                                                id:32,
                                                                icon: 'fa fa-plus-square-o',
                                                                link: '#',
                                                                items: [
                                                                    {
                                                                        title: 'Company Match',
                                                                        id:32,
                                                                        icon: 'fa fa-plue-square-o',
                                                                        link: '#',
                                                                        items: [

                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                name: 'Investing 401k',
                                                                id:33,
                                                                icon: 'fa fa-line-chart',
                                                                link: '#',
                                                                items: [
                                                                    {
                                                                        title: 'Investing 401k',
                                                                        id:33,
                                                                        icon: 'fa fa-line-chart',
                                                                        link: '#',
                                                                        items: [

                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Certificate of Deposit',
                                                icon: 'fa fa-certificate',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Certificate of Deposit',
                                                        icon: 'fa fa-certificate',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'IRA',
                                                icon: 'fa fa-area-chart',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'IRA',
                                                        icon: 'fa fa-area-chart',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Savings Account',
                                                icon: 'fa fa-plus-square-o',
                                                link: '#',
                                                items: [
                                                    {
                                                        title: 'Savings Account',
                                                        icon: 'fa fa-plus-square-o',
                                                        link: '#',
                                                        items: [

                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Mental Health',
                icon: 'fa fa-lightbulb-o',
                link: '#',
                items: [
                    {
                        title: 'Mental Health',
                        icon: 'fa fa-lightbulb-o',
                        items: [
                            {
                                name: 'Depression',
                                icon: 'fa fa-frown-o',
                                link: '#',
                                items: [
                                    {
                                        title: 'Depression',
                                        icon: 'fa fa-frown-o',
                                        link: '#',
                                        items: [

                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Self-Esteem',
                                icon: 'fa fa-smile-o',
                                link: '#',
                                items: [
                                    {
                                        title: 'Self-Esteem',
                                        icon: 'fa fa-smile-o',
                                        link: '#',
                                        items: [

                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Stress',
                                icon: 'fa fa-meh-o',
                                link: '#',
                                items: [
                                    {
                                        title: 'Stress',
                                        icon: 'fa fa-meh-o',
                                        link: '#',
                                        items: [

                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Physical Health',
                icon: 'fa fa-heart',
                link: '#',
                items: [
                    {
                        title: 'Physical Health',
                        icon: 'fa fa-heart',
                        items: [
                            {
                                name: 'Diet',
                                icon: 'fa fa-beer',
                                link: '#',
                                items: [
                                    {
                                        title: 'Diet',
                                        icon: 'fa fa-beer',
                                        link: '#',
                                        items: [

                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Fitness',
                                icon: 'fa fa-heartbeat',
                                link: '#',
                                items: [
                                    {
                                        title: 'Fitness',
                                        icon: 'fa fa-heartbeat',
                                        link: '#',
                                        items: [

                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Flexibility',
                                icon: 'fa fa-child',
                                link: '#',
                                items: [
                                    {
                                        title: 'Flexibility',
                                        icon: 'fa fa-child',
                                        link: '#',
                                        items: [

                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Personal Wellness',
                                icon: 'fa fa-bed',
                                link: '#',
                                items: [
                                    {
                                        title: 'Personal Wellness',
                                        icon: 'fa fa-bed',
                                        link: '#',
                                        items: [

                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];