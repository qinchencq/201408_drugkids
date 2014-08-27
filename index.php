        <?php include("inc/header.php");?>
                
        <div id="page_wrapper"><!--for responsive nav wrapper-->
        
        <?php include("inc/nav.php");?>
        <!--site content start--> 
            <div id="content">
            <?php
                    $page = $_GET['page'];  /* gets the variable $page */
                    $pages = array('home','cht1','cht2','cht3','cht4','cht5');

                    if (!empty($page)) {
                        if (in_array($page,$pages)){
                            $page.='.php';
                            include($page);

                        }else{
                          echo 'Page not found .Return to <a href="index.php"> index</a>';
                        }

                    }   /* if $page has a value, include it */
                    else {
                      include('home.php');
                    }   /* otherwise, include the default page */
            ?> 
            </div> 
        </div>                 
        <!--site content stop-->
        <?php include("inc/footer.php");?>

