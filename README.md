
# Notes sharing app
This is a fun project that allows college students to share notes with other people in pdf or image format. We would want our application to be able to produce a User Interface through which a person will be able to add and view notes in both formats properly. A user viewing the notes should have the ability to download the notes. We would also want the user to login so that only an authenticated user can view the notes.

## Pre-requisites:
* Create a Github account if you don’t have one.
* If you don’t have Git installed in your computer,  install Git using this guide. [Git - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* This a template repository. So, you will fork this repository in your GitHub account before working on it. This will give you a complete ownership of your code. To fork this project, click on the Fork button on the top right corner.
* Once you have the forked project, you will clone it to your computer to get started. To clone the project, click on the green “Clone or Download” button and follow the instructions.
* Learn about GitHub and Git commands. We will use git throughout the program, so make sure you have basic understanding of GIT.
* We will use Visual Studio Code as a text editor. If you have a different preference like Sublime Text, Atom etc., feel free to stick with it. Install [Visual Studio Code](https://code.visualstudio.com/) 
* If you don’t have npm installed in your computer,  install npm using this guide. [Npm - get npm](https://www.npmjs.com/get-npm)

## How to run the react app

* In your terminal, navigate to the api directory.
* Run `npm install` to install all dependencies.
* Run `npm start` to run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br/>
Note: The page will reload if you make edits. You will also see any lint errors in the console.

## How to configure firebase in your project
* If you don't have firebase account, follow  [Create firebase account](https://firebase.google.com/) 
* After you create your account, follow the steps provided in *Step 1* and *Step 2* : [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup#from-hosting-urls)).
*Note: You can skip all the steps marked as optional*
* [Create a Cloud Firestore database](https://cloud.google.com/firestore/docs/quickstart-mobile-web#create)
*Note: use the same project you created in earlier steps and stop after you complete 5 steps*
* Adding Firebase SDKs and initializing Firebase on your project:
		* Go to  [firebase console](https://console.firebase.google.com/) .
		* Click on your *project name*.
		* In *Project Overview* page click on *Add app* and select *web* as a platform.
		* On *Add Firebase to your web app* dialog box give a nickname and click on /Register app/
		* In dialog box copy `var config = <copy this area>` configuration key/value.
		* Open `firebase-config.js` file in your cloned project, it is under `src/config/` and replace the firebase `var firebaseConfig = <paste this area>` with your copied key/value

## Weekly Goals
### Week 1
Let us begin with configuring your project and firebase. 
* Follow the steps provided in initial setup
* Configure firebase with the step provided on your forked project.

This week we also want you to spend some time getting familiar with firebase and react. Feel free to play around.

### Week 2
This week’s goal is to create a form and store the values in firebase’s database.
* *Create a form to add notes*
Create a form that allows the user to upload files in either image or pdf format along with some other attributes corresponding to the file. Some of the other attributes are topic, description, college name, and course name. Provided fields are just a common attribute you need to share a note so feel free to add more fields if you think it is relevant.
*Resource*:  [Build Forms](https://reactjs.org/docs/forms.html)  and  [HTML Form Input - file](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) 
* *Store notes in Firebase*
Add the submitted form values to firestore database that you created.
*Resource*:  [Saving data into Firestore](https://sebhastian.com/react-firestore#Saving-data-into-Firestore)  and  [Upload Files on Web | Firebase](https://firebase.google.com/docs/storage/web/upload-files#monitor_upload_progress) 
* *Bonus*
Customize UI form to make it beautiful: get some inspiration from  [Dribble](https://dribbble.com/search/form)  or other websites.

### Week 3
Now that we are able to add note to the database, it is time to show the stored values so that other students can view them
* *Display the added notes*
	* Read the values from the firestore database and display them in a list format.
	*Resource to read from a database*:  [Fetching data](https://sebhastian.com/react-firestore#Saving-data-into-Firestore) 

	* Look into ways to display pdf and display them if the file is of .pdf format
	* Look into ways to display image and display them if the file is an image (not .pdf format)
	*Resource to download a file*:  [Download Files on Web | Firebase](https://firebase.google.com/docs/storage/web/download-files) 

* *Bonus*
Customize UI for the list to make it look beautiful: get some inspiration from  [Dribble](https://dribbble.com/search/list)  or other websites

### Week 4
Currently, we have all the information on the same page so let’s introduce routing to the app so that we have a separate page for adding notes, viewing notes, authentication (Login, Register - which we are going to implement soon). Also, let’s create a basic form for the Login page and Register page here - you could probably reuse the same form you built earlier and change the fields. 
* *Introduce routing* 
	* Let’s introduce routing to the app. Each page should have its own js file and have a unique URL.
	*Resource*:  [React router](https://codeburst.io/getting-started-with-react-router-5c978f70df91) 
	* List view could be the first page you will see.
	* Add a “Add a note” button to the list view page that redirects to create a note page.

* *Create Login and Register forms*
Create two pages: Login page and Register Page. You could probably reuse the same form you built earlier and change the fields. Also, don’t worry about configuring the submit button right now as this would be the goal for next week. Page description:
	* Login page: Form with two fields - email address and password that can be used to sign in to our app. 
	* Register page: Form with three fields - full name, email address, college name (optional: depends if you want to open this app to another school), and password that you use to sign in to our app. Feel free to add more fields like confirm password or whatever you think is relevant.

### Week 5
This week we want to introduce authentication to the app so that only authenticated users with registered email and password can come to the app. 
* *Introduce authentication to the app*
Implement Authentication using firebase
*Resource:*  [Authenticate with Firebase](https://firebase.google.com/docs/auth/web/password-auth) 
* *Add a Forget Password Page*
Create a forgot Password page that allows the user to reset password
*Resource:* [Reset Password](https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email) 

### Week 6
This week we just want you to wrap up all the previous goals. If time permits, we want you to look at some interesting bonus activities. Feel free to choose any and as many.

#### BONUS
* Let users filter notes based on the course and school.
* Instead of having a separate page for adding notes, you could open a modal instead.
* Add pagination so that only 10 notes are pulled at a time.
* Allow users to upload multiple images for the same note and show them in a paginated format.
* Add a check where only students from your college or specified college can register. You could add a check based on the email alias (for example: @columbia.edu). To make it more robust, you can filter out the notes for the colleges they are from.