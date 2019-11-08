![EntoLogic](/entologic-logo-small.png)  

> From the Greek words εντολη ([entolé](https://en.wiktionary.org/wiki/%CE%B5%CE%BD%CF%84%CE%BF%CE%BB%CE%AE)) and λογος ([logos](https://en.wiktionary.org/wiki/%CE%BB%CE%BF%CE%B3%CE%BF%CF%82)).

About EntoLogic
---------------



#### The EntoLogic project was created to help programming newcomers understand how programs work by explaining snippets they provide in whichever language they speak.

It won 1st place in the senior technology group at the [BT Young Scientist & Technology Exhibition](http://www.btyoungscientist.com/) (a national science fair).

- [Paper](./paper.pdf)
- [Poster](./poster.pdf)


### Code

- [Translator](https://github.com/EntoLogic/translator)
- [Web application](https://github.com/EntoLogic/such_entologic)
- [Ruby UAST generator](https://github.com/EntoLogic/ruby_uast_gen)
- [Java UAST generator](https://github.com/EntoLogic/java_uast_gen)

### UI

![explain](/explain.png)  

Note the black mouse on the right hovering over the explanation which causes the code to highlight on the left.



### How does it work?

*   The input programming language is first sent to an appropriate UAST (universal [abstract syntax tree](http://en.wikipedia.org/wiki/Abstract_syntax_tree)) generator.
*   The generator first parses your code into the native AST of the language and then converts your code
*   into our universal format which the main translator can understand.
*   The translator then traverses the nodes in the tree and gets the relevant phrase for the particular spoken language it is trying to explain it in.
*   Any conditional clauses are dealt with and variables are filled in.
*   The output tree is sent back to the frontend and displayed on the screen.


### FAQ

#### Translating x will not make any grammatical sense using your method!

Firstly you need to understand that the aim of EntoLogic is not to write poetic narratives of your code. We created it to get a message across to the reader. If we get people to understand programs better, we have accomplished our aim. This isn't at all to say that we aren't trying to make the system better at describing code like if it was written by a human.

#### What technologies did you use?

EntoLogic is written using multiple programming languages and data stores.

*   The main translator programmes are written in Haskell.
*   The whole web app is written in the famous/infamous JavaScript.
*   Backend is Node.js and the frontend is Angular.js.
*   And we are using MongoDB as a database.

#### Why isn't programming language x supported?

Obviously, we want to support as many programming languages as possible so EntoLogic can reach as many learners as possible. Currently our team is very small and we aren't experts in every single programming language. We have designed our system in a way that allows users to build the software necessary to parse (nearly) any programming language. If you are interested in helping out to build a UAST generator for a language you have proficiency in, please visit the [contribution](./CONTRIBUTING.md) for more information.

#### Why doesn't it highlight the whole thing I'm hovering over?

The locations we can highlight depend on what kind of info we get from the language parsers. The parser we are using for Ruby (Ripper) only gives the starting character location of literals. If you think you could do a better job or want to add support for another programming language, go to the [contribution page](./CONTRIBUTING.md).

