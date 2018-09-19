$( document ).ready(function() {
    var check= $('.person-view section > div')[0].className;
    $('.toggle-view-mode').on('click', function(){
        
        if(check==="grid-view"){
            showTable();
            check=$('.person-view section > div')[0].className;
        }
        else {
            showGrid();
            check=$('.person-view section > div')[0].className;
        }
    });
    
    $(document).on('click', '.fetch', function(event) { 
        if( check === "table-view"){
            event.preventDefault(); 
            check = "grid-view";
            $('.toggle-view-mode').click(); 
            check = "grid-view";
            $('.toggle-view-mode').click(); 
            check=$('.person-view section > div')[0].className;
        }
    });
    
//    Create Table
    function showTable(){
        $('.person-view > section > div > table').remove();
        // Get all the person cells currently injected into data var
        var data = $('.person-cell');
        var tbl = document.createElement('table');
        // Create table header
        var thd = document.createElement('thead');
            {
                var trhead =  document.createElement('tr');
                {   
                    var th1=document.createElement('th');
                    th1.appendChild(document.createTextNode('#'));
                    trhead.appendChild(th1);
                    var th2=document.createElement('th');
                    th2.appendChild(document.createTextNode('Title'));
                    trhead.appendChild(th2);
                    var th3=document.createElement('th');
                    th3.appendChild(document.createTextNode('First Name'));
                    trhead.appendChild(th3);
                    var th4=document.createElement('th');
                    th4.appendChild(document.createTextNode('Last Name'));
                    trhead.appendChild(th4);
                    var th5=document.createElement('th');
                    th5.appendChild(document.createTextNode('Race'));
                    trhead.appendChild(th5);
                    var th6=document.createElement('th');
                    th6.appendChild(document.createTextNode('Language'));
                    trhead.appendChild(th6);
                    var th7=document.createElement('th');
                    th7.appendChild(document.createTextNode('University'));
                    trhead.appendChild(th7);
                    var th8=document.createElement('th');
                    th8.appendChild(document.createTextNode('Job Title'));
                    trhead.appendChild(th8);
                    var th9=document.createElement('th');
                    th9.appendChild(document.createTextNode('Company'));
                    trhead.appendChild(th9);
                    var th10=document.createElement('th');
                    th10.appendChild(document.createTextNode('Department'));
                    trhead.appendChild(th10);
                    var th11=document.createElement('th');
                    th11.appendChild(document.createTextNode('Employer ID'));
                    trhead.appendChild(th11);
                    var th12=document.createElement('th');
                    th12.appendChild(document.createTextNode('E-mail'));
                    trhead.appendChild(th12);
                    var th13=document.createElement('th');
                    th13.appendChild(document.createTextNode('LinkedIn Skill'));
                    trhead.appendChild(th13);
                    var th14=document.createElement('th');
                    th14.appendChild(document.createTextNode('Buzzword'));
                    trhead.appendChild(th14);
                }
                thd.appendChild(trhead);
            }
        // Create table body
        var tbdy = document.createElement('tbody');
            for(let i=0;i<data.length;i++){
                var tr = document.createElement('tr');
                for(let j=0;j<14;j++) {
                    if(i==data.length-1 && j==14){
                        break;
                    } else {
                        switch(j){
                            case 0:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(i+1));
                                tr.appendChild(td);
                                break;
                            case 1:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerText));
                                tr.appendChild(td);
                                break;
                            case 2:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[0].childNodes[0].childNodes[1].childNodes[1].innerText));
                                tr.appendChild(td);
                                break;
                            case 3:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerText));
                                tr.appendChild(td);
                                break;
                            case 4:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[0].childNodes[1].innerText));
                                tr.appendChild(td);
                                break;
                            case 5:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[0].childNodes[2].innerText));
                                tr.appendChild(td);
                                break;
                            case 6:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[1].childNodes[0].innerText));
                                tr.appendChild(td);
                                break;
                            case 7:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[2].childNodes[0].innerText));
                                tr.appendChild(td);
                                break;
                            case 8:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[2].childNodes[1].innerText));
                                tr.appendChild(td);
                                break;
                            case 9:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[2].childNodes[2].innerText));
                                tr.appendChild(td);
                                break;
                            case 10:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[2].childNodes[3].innerText));
                                tr.appendChild(td);
                                break;
                            case 11:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[2].childNodes[4].innerText));
                                tr.appendChild(td);
                                break;
                            case 12:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[3].childNodes[0].innerText));
                                tr.appendChild(td);
                                break;
                            case 13:
                                var td = document.createElement('td');
                                td.appendChild(document.createTextNode(data[i].childNodes[1].childNodes[3].childNodes[1].innerText));
                                tr.appendChild(td);
                        }
                        
                    }
                }
                tbdy.appendChild(tr);
            }

        tbl.appendChild(thd);
        tbl.appendChild(tbdy);
       
        $('.person-view > section > div').append(tbl);
        $('.person-view > section > div > table').addClass('table').addClass('table-striped').addClass('table-sm').addClass('mx-4');
        hideAll();
    }

    function hideAll(){
        $('.person-cell').css("display","none");
    }

    function showGrid(){
        $('.person-cell').css("display","inline-block");
        $('.person-view > section > div > table').remove();
    }

});