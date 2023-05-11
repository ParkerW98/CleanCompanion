# CleanCompanion
A one stop, up keep companion to keep you on track and up to date on all your cleaning tasks.

“Cleaning Companion”

User Experience: The purpose of this app will be for users to be able to create ACCOUNTS, add SPACES, within the SPACES add TASKS that will be color coded depending on the user parameters they set. After a user sets up an ACCOUNT it will then ask them if they want to create a SPACE. 

After a SPACE is created they will prompted to add TASKS to the SPACE. The Tasks will be listed color coded depending on their “due” date. Within each task they will be able to add a brief description, they will be able to submit done that will date it and add what user completed the TASK on that date. 

What we need: Database: We need a database with 3 relational databases. Users, Spaces, and tasks. The users will have userId, firstName, lastName, password and email. The spaces will have SpaceId, SpaceName, OwnerId(userId, fk), and description of space. Tasks will have tasksId, (SpaceId, fk), description, owner. The last table will be the TaskCompletion table that will keep track of all the instances of a tasks completion. It will have the taskId as a the foreign key, completionId, userId, the date completed and any notes entered from the user who completed the task. 

Pages: We need a home page explaining what the app does and with a nav bar for HOME, ABOUT, CONTACT, FAQ’s, LOGIN/REGISTER, PRIVACY POLICY/TERMS OF SERVICE. 

Home: Just a brief description of what the web app is designed to accomplish with a slide show showing different screen shots of how it works. Basically a small tutorial. About: A little bio of the team who worked on it and what our mission statement is.
