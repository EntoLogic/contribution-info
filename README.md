Contribution Info
=================

EntoLogic is built by a small team of two yet we are trying to support automatic explanation of as many programming languages as possible.

If you are passionate about a certain programming language and would like to see it be explained on the site, please read on about how to help build UAST (Universal Abstract Syntax Tree) generators.


###Overview
The way our system attempts to translate from any programming language is through an abstraction called the Universal Abstract Syntax Tree. It was created so that we don't have to build a translator for every single language but instead convert the AST of each language into a single unifying [JSON](http://www.json.org/) format. We understand that this is quite a [heuristic](https://en.wikipedia.org/wiki/Heuristic_(engineering)) and are coming up with solutions to evolve it. However the aim of EntoLogic is not to give the user beautiful poetry but a basic understanding of what is going on in their program.


###What a UAST generator should do
A UAST generator should be able to parse the input language and form the JSON UAST output according to the specification. The way it works on the inside is completely up to you and other contributors. Efficiency is obviously a bonus though. The program itself is conventionally written in the language it is parsing but can be written in any.


###What you should do
1. Firstly, to parse a language, you are going to need a parser. Have a search around for what people use for parsing the language you are interested in creating it for. There are often a few open source projects and even some standard library libraries for this.
2. Understand the format of the AST it generates. Then go and look at the UAST specification. Your program will need to be able to convert from your languages AST => UAST. As mentioned above, we know there may be some losses of meaning, especially specifics to your language. If you believe something on the UAST spec should be added or changed, please fork this repo and send a pull request. We are happy to extend it's functionality yet we don't want to be adding anything too unique to any particular language. This would make for excess phrases needing to be added and also kind of defeats the purpose of it's existence in the first place.
3. Build a small prototype and then email us (info@entologic.net) with a link to it on GitHub. We can then transfer ownership of it to the EntoLogic organisation (Don't worry, you will still get all the credit for starting it).


###Resources
You will find the [UAST specification](https://github.com/EntoLogic/contribution-info/blob/master/uast_spec.md) in this repo. It may seem a bit confusing at first but it's really just a description of the JSON structure. Check out some [example](https://github.com/EntoLogic/contribution-info/blob/master/examples) output trees to get an idea of what matches the specification.

Generators
----------

* [Ruby](https://github.com/EntoLogic/ruby_uast_gen)
* Java - We are starting to put a prototype together ourselves which you will be able to contribute to, but please don't hesitate to start one yourself.