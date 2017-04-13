Performance Test framework
==========================

#Set Up
- latest jmeter (3.1 or above) from [Apache Jmeter](http://jmeter.apache.org/download_jmeter.cgi)
- ensure Jmeter bin is added to your Path (C:\apache-jmeter-3.1\bin)

##CLI execution

- In order to run Jmeter beyond proxy, the below command script might be required.
  ```
  jmeter -H sydproxy.acp.net -P 8080 -u acp\{yourusername} -a {yourpw}
  ```

- In order to run Jmeter with HTML report
  ```
  jmeter -n -t <test JMX file> -l <test log file> -e -o <Path to output folder>
  ```

- Generate report from existing Log file
  ```
  jmeter -g <log file> -o <Path to output folder>
  ```
 
##Data
- ArticleData.csv is a data set for the Article thread. It should be amended accordingly.

- Use following query to get urls for articleData.csv
  ```
  SELECT "liveData"->>'url'
  FROM entity
  where "siteId" = 'dolly'
  ```

##User Metrix

Request the below info for test plan

- Average concurrent USERS => `554 for NTL`  
- Peak concurrent USERS => `3295 for NTL`

##Run in flood.io

go to https://flood.io/ and create a new account
Select the relevant jmeter script and data and Run for 5 min.

refer to this link [https://flood.io/20NyFzEi](https://flood.io/20NyFzEi)

- While the execution is taking place Open AWS and monitor the stacks `now-site-live` 
