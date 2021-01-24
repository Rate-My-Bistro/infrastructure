# Rate my Bistro: Infrastructure

Describes the infrastructure for the Rate my Bistro App

## Database Access

The database access is restricted to the  bistro user.
Find your favorite rest client and enable basic auth (find the credentials in [docker-compose](./docker-compose.yml)).
You can query all menus by executing the following simple query:

```
PUT http://localhost:8529/_db/bistro/_api/simple/all
{ "collection" : "menus" }
```

You can query all jobs by executing the following simple query:
```
PUT http://localhost:8529/_db/bistro/_api/simple/all
{ "collection" : "jobs" }
```


## Become a contributor

Send me an email: ansgar.sa@gmail.com
