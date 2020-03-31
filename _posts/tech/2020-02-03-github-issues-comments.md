---
layout: post
title: 	"Adding Comments to Jekyll Github-hosted blog with Github Issues"
date:	2020-02-03 10:54
categories:	tech
tags:		[jekyll, github, how-to, comments] 
description: 	"A summary of how I added comments to my Github-hosted blog; albeit by requiring people to use a Github-account to interact with the comment-page"
published: true
lastmod:	2020-02-03 10:54
---

As I am trying to throw myself into some projects, I realize I need a comment system on this blog. With the help of some friends on the internet, I have implemented a comment system using [Github Issues API](https://developer.github.com/v3/issues/). This does mean that everyone who hopes to comment on my blog will need a Github user account, but I see this as a small price to pay for the benefits it will confer.

I had implemented Staticman comments a while back but never implemented a CAPTCHA and suffered a large input of spam on my guestbook. The guestbook was always meant to be a test for later post-centered discussion, but I never finished it. 

Anyway. Let's try to do a quick rundown of how to add static site comments.

All Github Issue comments are available with a query to Github. As a test subject, I will add comments to my recently posted recipe for [Apple Blackberry Pie](https://nan.nyc/recipes/apple-blackberry-pie). I went to the issues section of the blog's repository and created [an issue](https://github.com/SplendidStrontium/splendidstrontium.github.io/issues/20) to correspond to the comments on this post. The issue is number 20. I insert the URL into my browser

    https://api.github.com/repos/splendidstrontium/splendidstrontium.github.io/issues/20/comments

And I receive back a JSON text-file as follows. Nice.

    [
      {
        "url": "https://api.github.com/repos/SplendidStrontium/splendidstrontium.github.io/issues/comments/581472860",
        "html_url": "https://github.com/SplendidStrontium/splendidstrontium.github.io/issues/20#issuecomment-581472860",
        "issue_url": "https://api.github.com/repos/SplendidStrontium/splendidstrontium.github.io/issues/20",
        "id": 581472860,
        "node_id": "MDEyOklzc3VlQ29tbWVudDU4MTQ3Mjg2MA==",
        "user": {
          "login": "SplendidStrontium",
          "id": 1739018,
          "node_id": "MDQ6VXNlcjE3MzkwMTg=",
          "avatar_url": "https://avatars0.githubusercontent.com/u/1739018?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/SplendidStrontium",
          "html_url": "https://github.com/SplendidStrontium",
          "followers_url": "https://api.github.com/users/SplendidStrontium/followers",
          "following_url": "https://api.github.com/users/SplendidStrontium/following{/other_user}",
          "gists_url": "https://api.github.com/users/SplendidStrontium/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/SplendidStrontium/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/SplendidStrontium/subscriptions",
          "organizations_url": "https://api.github.com/users/SplendidStrontium/orgs",
          "repos_url": "https://api.github.com/users/SplendidStrontium/repos",
          "events_url": "https://api.github.com/users/SplendidStrontium/events{/privacy}",
          "received_events_url": "https://api.github.com/users/SplendidStrontium/received_events",
          "type": "User",
          "site_admin": false
        },
        "created_at": "2020-02-03T15:37:16Z",
        "updated_at": "2020-02-03T15:37:16Z",
        "author_association": "OWNER",
        "body": "A test comment left 10:37 AM on 2/3/2020"
      }
    ]

I know that this post will need to know which issue it corresponds to. So let's go ahead and [edit our post](https://raw.githubusercontent.com/SplendidStrontium/splendidstrontium.github.io/master/_posts/recipes/2020-01-28-apple-blackberry-pie.md) to include the new comment attribute.

    ---
    layout: post
    title: 	"Apple Blackberry Pie"
    date:		2020-01-28 11:19
    categories:	recipes
    tags:		[wheat, rye, butter, corn] 
    description: 	"first try AP->rye"
    published: true
    comments_id:	20
    lastmod:	2020-02-03 12:00
    ---
    
    (...)
    
    ## crust
    
    * cut into small cubes `225g butter`
    * freeze or defrost slightly if frozen

I already have a few partial html files that are taped together to render the final blog page. So let's create a [new piece](https://github.com/SplendidStrontium/splendidstrontium.github.io/blob/master/_includes/comments.html) in my `_includes` directory that is in the root of my blog's folder structure. I also added a [comments sass](https://github.com/SplendidStrontium/splendidstrontium.github.io/blob/master/_sass/_comments.scss) and made sure to make note of the new file in the `main.scss` in `/css`.

To add this to each post layout, check out your [post layout](https://github.com/SplendidStrontium/splendidstrontium.github.io/blob/master/_layouts/post.html) and make sure your `comments.html` is included.

Thanks all. Hope that was helpful.

## Some posts that helped me

[Gazoo: Adding Github Comments](http://donw.io/post/github-comments/)<br>
[Aristath: Static Site Comments Using Github Issues](https://aristath.github.io/blog/static-site-comments-using-github-issues-api)
