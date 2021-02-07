# System Design Capstone

## Overview

Refactor the back end server and database for an existing e-commerce store.
Requirements are to return identical data while finding the most performant and
affordable technologies to meet the clients need. Client requested a system that
can process over 1000 requests per second on a database of up to 10 million
primary records with a sub 1% error rate.

### Database selection

Testing locally between PostgreSQL and mongoDb on a generated dataset of 10
million primary records I noticed a roughly 30 percent faster insert and query
speed using PostgreSQL. Upon selection of this database further optimizations
were made to be discussed below.

### Data Generation

Generating 10 million records and writing to disk had some minor hiccups.
Because the memory allocated by node was not enough to generate all the data at
once I needed to find a way to write to disk while avoiding overriding the
memory.

The most obvious solution was to use a writeStream which would periodically
flush the memory as the data was written to disk. Instead because I found it a
little bit more fun to write I ended up using a recursive algorithm alongside a
library that writes an object to disk.

### Local Testing

### Deploying to AWS EC2 micro instances, aka saving $$$

### Testing in the Cloud

### Horizontal Scaling

### Postgres and Node server optimizations

### Results
