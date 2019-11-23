# _Doctor Lookup_

#### _A site that finds doctors depending on entered search. 11/15/2019_

#### By _**Andrew Bates**_

## Description

_This is a site that uses an API to find doctors depending on the entered search term._

## Specifications

_Spec: return a list of doctors when a medical issue is entered._
  * _Input: Sniffles_
  * _Output: Doc1, Doc1 info, Doc2, Doc2 info_

_Spec: return a list of doctors that match a name search._
  * _Input: Doc1_
  * _Output: Doc1, Doc1 info_

_Spec: return useful information about the doctor returned._
  * _Input: Doc1_
  * _Output: Doc1(John Smith, 123 Road Way, 123-123-1234, Doc1.com, Available/Unavailable)_

_Spec: return an error message describing the error, if the API call returns in an error._
  * _Input: !200 OK_
  * _Output: there was an error, (specific error text)_

_Spec: return a notification that there are no results if the search term does not match any doctors._
  * _Input: DocQ_
  * _Output: No doctors match that criteria_

## Setup/Installation Requirements

* _Go to https://github.com/abatesaccs/doctorLookup_
* _Clone or download all files in the repository (make sure they are contained in the same file!)_
* _install node.js and npm_
* _run npm install in the terminal_
* _create an account through betterdoctor.com and copy the api into a .env file in the root of the directory and make a variable called API_KEY e.g. (API_KEY=[your key])_
* _run npm start in the terminal_

_The file may have inconsistencies when using older browser versions_

## Known Bugs

_Bootstrap, and possibly jQuery are not working properly visually_

## Support and contact details

_If you run into any issues, or have any trouble, contact me:
 Andrew Bates
 email: abatesaccs@gmail.com_

## Technologies Used

_Atom, Bootstrap, jQuery, node.js, webpack, jest_

### License

*Copyright (c) 2019 Andrew Bates

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*

Copyright (c) 2019 **_Andrew Bates_**