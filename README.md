#A SMF 2.0 forum for the godot community.

The forum is based on the SMF 2.0 forum system.
I installed the ALDO theme and modified colors and icons that it fits to the Godot engine.
If you want to try it out you also need to use a database which I also provide in the git repository.
This databse needs to be on another server (sql server).
if you want to try the page you need to:
- Copy all files from the repository (except the database to an apache server)
- Install the database on a mysql server
- Go to the settings.php file and change (everything in those: [] brackets) to the value you need:
  <pre><code>
  $db_type = 'mysql';
  $db_server = '[the serveradress of your sql database which you downlaoded from this git repository
    in my case localhost:3306 (I'm using XAMPP)]'; 
  $db_name = 'test';
  $db_user = '';
  $db_passwd = '';
  $ssi_db_user = '';
  $ssi_db_passwd = '';
  $db_prefix = 'smf_';
  $db_persist = 0;
  $db_error_send = 1;
  </code></pre>
    The mysql database isn't secured with a password. So you dont need any other settings
- Now you should be able to visit the Apache server where you copied all other files (except the database) of this repository.
- Login with username: admin passwort admin
- Than you can mess around with the settings and test everything. 

It should look like that:
![Image of The Website](https://github.com/toger5/godotdevs-Forum/Themes/aldo/images/screnshotpage1.png)
