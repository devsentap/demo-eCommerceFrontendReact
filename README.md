Sample E-commerce site frontend built with GatsbyJS V2 and React.
Also note the use of GraphQL to query the images. 
In my opinion, Gatsby's choice of using GraphQL here is a bit too much. Sigh.

Stacks Used:
- Gatsby V2, a static site generator with React frontend https://www.gatsbyjs.org/
- Bulma CSS framework https://bulma.io/
- Material Design Icons https://materialdesignicons.com/

Demo at https://demo-eazy.surge.sh/

## 🚀 How to test in your local environment

1.  **Start developing.**

    ```shell
    npm install
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## Technical Details
1. Using Gatsby gives us a lot of benefits out of the box, notice the progressive image lazy loading.. Nice!
2. Tried using react hooks for the first time!
3. Data fetched from: 
- http://5b35ede16005b00014c5dc86.mockapi.io/list,
- http://5b35ede16005b00014c5dc86.mockapi.io/view/<ITEM_ID>,
- http://5b35ede16005b00014c5dc86.mockapi.io/similar/<ITEM_ID>

## Rough Design
![](ui-design.jpg)
