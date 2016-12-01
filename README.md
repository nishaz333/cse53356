Project 2- CSE5335
=================

Name: Nitin D. Pawar	    	netid: ndp0502		   
===============================
netid: ndp0502	
=========================
Student id: 1001250502
=======================
URL: https://cse5335-ndp0502-2.herokuapp.com/
-----------------------------------------------------
Project Desc:
==========================================
Project is basically Citywise Information. it is single page application web page/app.
On homepage of website, there is button "Get Info" in the header section.
Click on that button.
As per the project requirement, first 20 objects will come with slight inrval then for the next 20 object, the 

---------------------------------------------------------------------------------------------------

a.	What aspect of the implementation did you find easy, if any, and why?
==================================================================================

I was working as .NET developer back in India. I was familiar with CSS but never worked on HTML. 
While working on this project-1, I found HTML & CSS has the same concept like asp.net & css.
SO it was easy for me to design the page and manage its stylesheets. 
I have learned a lot during Project-1 & from W3SCHOOL and other websites to understand the dynamic implementation of HTML page using jQuery. 
It was easy to create dynamic <Div> (attributes) of HTML using jQuery and binding the data to it.
Surprisingly AJAX call was very sweet, simple and short as compared to Nodejs & JSON.

-------------------------------------------------------------------------------------------------------------

b.	What aspect of the implementation did you find hard, if any, and why?
=================================================================================

I have most of the time on animation as it was very difficult to animatte the tile and bind the data on it.
The hard part during the development was to stringify the data first, then i had to encode it through encodeURI as i am using JSON object to transfer the data 
which would have gave me an error because of special characters while retrieveing the data.
Another hard part was to manage the timeintervals while representing the data in a group pf 20-20.
One of my problems is that i was binding the data incorrectly. clearInterval(interval) is actually being called and its return value is what is being bound to the event.
then i did wrap it in an anonymous function to get it to work.
As i was using ClearDB, to insert the data into database throough node.js was bit difficult and faced a lot of connectivity issue while creating the DBschema 
through MySQL workbench.
Luckily because of the Project-1 experience, i had a good understaing of web data app development process that helped me alot to concentrate on additional features this time.

----------------------------------------------------------------------------------------------------------------------------

C.	If you were to use these technologies professionally, what would be your biggest concern?
=================================================================================================================
Manage the AJAX call, time-intervals, Database connectivity whould have been biggest concern.
As node js has some disadvatages like Node's core is entirely built on top of the premise of asynchronous I/O. Being a single-threaded platform focused on I/O bound applications on top of a language that 
does not guarantee purity and has no support for co-routines, this is an understandable choice. It is much better than heavy-weight threads with shared state, as you 
have in Java and similar mainstream languages. But it's a poor model of concurrency to expose to the platform, none the less.
JavaScript doesn't really have any good primitive for concurrency (although generators will allow cooperative concurrency, and can be used experimentally in Node today), 
and the core, along most libraries in the ecosystem, just straight up expect you to use continuation-passing style, which leads to non-compositional code, codebases that 
are difficult to reason about, and lots and lots of duplication and call-site specific glueing.

--------------------------------------------------------------------------------------------------------------------------------------
	
