$(document).ready(function(){
		$.get('scores.txt', function(d)
		{
	    	data = d;
		    data = data.split("$");
		    lines = [];
			for(var i = 0; i < data.length; i++)
			{
				lines.push(data[i].split("\t"));	
			}
			
			
	});	
});

function validate()
{
	var user_kuid = document.forms["recorder"]["KUID"].value;
	var user_last = document.forms["recorder"]["Lastname"].value;
	var index = getIndex(user_kuid);
	

	if(index == -1) 
	{

		log_error(1);
	}
	else
	{
		if(lines[index][2] == user_last) session(index);
		else log_error(2);
	}
}

function getIndex(userID)
{
	for(i=0; i<lines.length; i++)
	{
		if(lines[i][1] == userID)
		{
			return i;
			break;
		}
	}
	return -1;
}


function log_error(error_id)
{
	if(error_id==1)
	{
		writeData="<br/><strong><center><span style='color:red;'>Please check your KUID. </span></center></strong>";
		document.getElementById("error_log").innerHTML= writeData;
		setTimeout( function(){ cleanDiv(); } , 3000 );
	}
	else
	{
		writeData='<br/><strong><center>KUID and Lastname do not match.<br/>Enter your last name in <span style="color:red;">ALL SMALL</span> letters. </center></strong>';
		document.getElementById("error_log").innerHTML= writeData;
		setTimeout( function(){ cleanDiv(); } , 3000 );
	
	}
}

function cleanDiv()
{
	writeData="";
	document.getElementById("error_log").innerHTML= writeData;	
}

function session(index)
{
/*var writeData= '<table align="center" border="1" cellpadding="1" cellspacing="1" ><tbody><tr><td>Sr.</td><td>Student ID</td><td>Student Name</td><td>HW1</td><td>HW2</td></tr>';
			for(i=0; i<36; i++)
			{
				var j= i+1;
				writeData= writeData + '<tr><td width="5%">'+ j +'</td>';
				writeData= writeData + '<td width="10%">'+ lines[i][1] +'</td>';
				writeData= writeData + '<td width="65%">'+ lines[i][3] +'</td>';
				writeData= writeData + '<td width="10%">'+ lines[i][4] +'</td>';
				writeData= writeData + '<td width="10%">'+ lines[i][5] +'</td></tr>';
			}
			writeData= writeData + '</tbody></table>';
			writeData= writeData+'<br/><br/><center><button class="btn btn-lg btn-primary" onClick="log_user_out()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log Out&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></center>';
		}*/
		
	var user_name = lines[index][3];
	user_name= user_name.replace(/['"]+/g, '');
	var VALUE="SAMPLE";
var writeData="<h2>Hi "+user_name+"</h2>";
		
		writeData= writeData+'<p>Following is the summary of your scores so far:</p><br/><br/>';
		writeData= writeData+'<table id = "score_report"  align= "center" border="1" cellpadding="1" cellspacing="1" ><tbody><tr><th><strong>Assignment</strong></th><th><strong><center>Score</center></strong></th><th><strong><center>Max&nbsp;</center></strong></th></tr>';
		writeData= writeData+'<tr><td width= "250">Homework 1</td><td width= "120"><center>'+lines[index][4]+'</center></td><td width= "120"><center>50</center></td></tr>';
		writeData= writeData+'<tr><td>Homework 2</td><td><center>' + lines[index][5]+ '</center></td><td><center>50</center></td></tr>';
		writeData= writeData+'<tr><td>Homework 3 - Pt 1</td><td><center>' + lines[index][6]+ '</center></td><td><center>50</center></td></tr></tbody></table>';
		
		writeData= writeData+'<p>&nbsp;</p><p>&nbsp;</p><table id = "score_report" border="1" cellpadding="1" cellspacing="1" style="width: 500px;"><tbody><tr><th><strong>Exams</strong></th><th><strong>Score</strong></th><th><strong>Max</strong></th></tr>';
		writeData= writeData+'<tr><td>Midterm 1</td><td>'+lines[index][7]+'</td><td>80</td></tr></tbody></table><p>&nbsp;</p><p>&nbsp;</p><h2>Summary</h2><p>&nbsp;</p>';

		writeData=writeData+'<table id = "score_report" border="1" cellpadding="1" cellspacing="1" style="width: 500px;"><tbody><tr><td>&nbsp;</td><td><strong>Score</strong></td><td><strong>Max</strong></td>';
		writeData=writeData+'</tr><tr><td><strong>Homework</strong></td><td>'+lines[index][8]+'% </td><td>15 %</td></tr>';
		writeData=writeData+'<tr><td><strong>Exam</strong></td><td>'+lines[index][9]+'% </td><td>20 %</td></tr>';
		writeData=writeData+'<tr><td><strong>Total</strong></td><th>'+lines[index][10]+'% </th><th>35 %</th></tr></tbody></table><p>&nbsp;</p>';

		writeData= writeData+'<p>&nbsp;</p><p>If you have any questions, please feel free to contact me at chinmay.ratnaparkhi@gmail.com.</p>';
		writeData= writeData+'<br/><br/><button class="btn btn-lg btn-primary" onClick="log_user_out()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Out&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>';

		document.getElementById("writeArea").innerHTML= writeData;


}

function log_user_out()
{
	window.location="log.html";
}