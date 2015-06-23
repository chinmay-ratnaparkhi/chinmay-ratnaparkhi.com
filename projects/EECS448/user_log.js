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
		
		index = getIndex(user_kuid);		
		
		if(index == -1) log_error(1);
		else
		{
			if(index == 360 && user_last== "eecs448admin") success(index);
			else if(user_last == lines[index][2]) success(index);
			else log_error(2);
		}
	}
	/* looks up a KUID and returns the index of where it lies. */
	function getIndex(x)
	{
		if(x == "chakrabarti") return 360;
		else
		{
			for(i=0; i<36; i++) 
			{
			
				if(lines[i][1] == x) 
				{
					return i;
				}
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
	/* successful log-in. Show score for the user.*/
	function success(x)
	{
	
		if(x== 360)
		{
		
			writeData= '<table align="center" border="1" cellpadding="1" cellspacing="1" ><tbody><tr><td>Sr.</td><td>Student ID</td><td>Student Name</td><td>HW1</td><td>HW2</td></tr>';
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
		}
		else
		{
	
			writeData="<h2>Hi "+lines[x][3]+"</h2>";
		
			writeData= writeData+'<p>Following is the summary of your scores so far:</p><br/><br/>';
			writeData= writeData+'<table border="1" cellpadding="1" cellspacing="1" ><tbody><tr><td><strong>Assignment</strong></td><td><strong><center>Score</center></strong></td><td><strong><center>Max&nbsp;</center></strong></td></tr>';
			writeData= writeData+'<tr><td width= "250">Homework 1</td><td width= "120"><center>'+lines[x][4]+'</center></td><td width= "120"><center>50</center></td></tr>';
			writeData= writeData+'<tr><td>Homework 2</td><td><center>' + lines[x][5]+ '</center></td><td><center>50</center></td></tr>';
			writeData= writeData+'</tbody></table><p>&nbsp;</p><p>If you have any questions, please feel free to contact me at chinmay.ratnaparkhi@gmail.com.</p>';
			writeData= writeData+'<br/><br/><button class="btn btn-lg btn-primary" onClick="log_user_out()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Out&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>';
		}

		document.getElementById("writeArea").innerHTML= writeData;
	}
	
	function log_user_out()
	{
		window.location="log.html";
	}