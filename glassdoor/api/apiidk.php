<?php

 /**
 * Class to access Careerjet's job search API
 *
 * Code example:
 * 
 * <code>
 *
 *  require_once "Careerjet_API.php";
 *  
 *  // Create a new instance of the interface for UK job offers
 *  $cjapi = new Careerjet_API('en_GB');
 *  
 *
 *  // Then call the search methods (see below for parameters)
 *  $result = $cjapi->search( array(
 *                                   'keywords' => 'java manager',
 *                                   'location' => 'London',
 *                                   'affid'    => '0afaf0173305e4b9',
 *                                 )
 *                           );
 *
 *  if ($result->type == 'JOBS') {
 *      echo "Got ".$result->hits." jobs: \n\n";
 *      $jobs = $result->jobs;
 *
 *      foreach ($jobs as &$job) {
 *          echo " URL: ".$job->url."\n";
 *          echo " TITLE: ".$job->title."\n";
 *          echo " LOC:   ".$job->locations."\n";
 *          echo " COMPANY: ".$job->company."\n";
 *          echo " SALARY: ".$job->salary."\n";
 *          echo " DATE:   ".$job->date."\n";
 *          echo " DESC:   ".$job->description."\n";
 *          echo "\n";
 *       }
 *   }
 *  
 *  </code>
 *     
 *
 * @package    Careerjet_API
 * @author     Thomas Busch <api@careerjet.com>
 * @copyright  2007-2015 Careerjet Limited
 * @link       http://www.careerjet.com/partners/api/php/
 */

    require_once "Careerjet_API.php";
  
    // Create a new instance of the interface for UK job offers
    $cjapi = new Careerjet_API('en_GB');
  

    // Then call the search methods (see below for parameters)
    $result = $cjapi->search( array(
        'keywords' => 'java manager',
        'location' => 'Singapore',
        'affid'    => 'a1856f73c97cd499abe648d469141c15',
        )
    );

    if ($result->type == 'JOBS') {
        echo "Got ".$result->hits." jobs: \n\n";
        $jobs = $result->jobs;

        foreach ($jobs as &$job) {
            echo " URL: ".$job->url."\n";
            echo " TITLE: ".$job->title."\n";
            echo " LOC:   ".$job->locations."\n";
            echo " COMPANY: ".$job->company."\n";
            echo " SALARY: ".$job->salary."\n";
            echo " DATE:   ".$job->date."\n";
            echo " DESC:   ".$job->description."\n";
            echo "\n";
        }
    }
    
    function search($args){
        $result =  $this->call('search' , $args);
        if ($result->type == 'ERROR') {
        trigger_error( $result->error );
        }
        return $result;
    }
  



?>
