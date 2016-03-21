#A SMF 2.0 forum for the godot community.

There is currently a test instance online:

#[Godotdevs.com](http://www.godotdevelopers.org)

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
- in addation you need to change the source folder directorys to the path of you website (also in the settings.php)
- and all the url and directorys in the db (these can be found in the two tables: smf_themes and smf_settings) visit this link for detailed instruction: [SiteGroundHElpFor moving SMF Forums](https://www.siteground.com/kb/i_would_like_to_move_my_smf_site_from_a_subfolder_to_my_main/)
- Now you should be able to visit the Apache server where you copied all other files (except the database) of this repository.
- you may have to go to admin/themes and change the theme sourcepaths too
- Login with username: admin passwort admin
- Than you can mess around with the settings and test everything. 

It should look like that:
![Image of The Website](https://github.com/toger5/godotdevs-Forum/blob/master/Themes/aldo/images/screnshotpage1.png)

###List of settings (SMF) which should be changed when setting up a new SMF page with that theme:
 - profil/avatar image size: 100px, 100px
 - image upload file size is very small and needs to be increast (jou should at least be able to uploat 1080p images)
 - Max width of posted pictures should be set to:    width: 720 (otherwise there will be scrollbars ;( )
 

