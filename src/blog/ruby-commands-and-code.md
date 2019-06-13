---
title: Ruby - Commands & Code
date: "2018-03-01"
---

# Blocks are simple 'blocks of code' that can be called and sent code/variables to execute within the block. Use the “yield” within the block to use the calling source

# Ruby: Commands & Code

# Basics

## Objects

Everything is an Object (well, 99.9%)!

**_obj.class_** What’s this class?

**_obj.superclass_** How about inherited class?

**_obj.ancestors_** Check out the family tree, shall we?

Variables

**_var_** Local Variable

**_\$var_** Global Variable

**_@var_** Instance variable (OBJ)

**_@@var_** Class variable

**_MY_VAR_** constant, of course.

## Blocks

Blocks are simple "blocks of code"’ that can be called and sent code/variables to execute within the block. Use the “yield” within the block to use the calling source code/variables

    def test

puts "You are Here"

yield

puts "Now you’re There!"

yield

end

test {puts "Where?"}

Output:

You are Here

Where?

Now you’re There!

Where?

## Methods

All methods will return something, whether you like it or not!

Special Method Stuff:

**_attr_accessor_** makes an instance variable, access and assignment method.

**_a_\*\***_ttr_reader _\*\* instance variables and corresponding methods that return the value of each instance variable

**_attr_writer_** creates accessor method and allows them to be assigned

---

# In Terminal

## \$ ruby -v

Get the version of ruby installed

E.g. ruby -v

## \$ irb

Start the Ruby interactive shell

E.g. irb

---

# YAML

[https://rhnh.net/2011/01/31/yaml-tutorial/](https://rhnh.net/2011/01/31/yaml-tutorial/)

## Install

\$gem install yaml-lint

## Check a file - \$ yaml-lint filename.yaml

Checks a file is correct YAML

E.g. \$yaml-lint filename.yaml

## Check a whole folder - \$ yaml-lint folder_name/

Checks a whole folder’s files are correct YAML

E.g. \$yaml-lint my_folder/

---

# MiniTest

[https://github.com/bibstha/intro-to-ruby-minitest](https://github.com/bibstha/intro-to-ruby-minitest)

## Install

\$bundle install --path vendor/bundle

## Run test on file

\$bundle exec rake TEST=path_to_file

---

# Gems

[https://guides.rubygems.org/make-your-own-gem/#introduction](https://guides.rubygems.org/make-your-own-gem/#introduction)

## Basic file requirements

- gemname.gemspec

- Lib

  - Gemname.rb

## Create gem

1. Run \$gem build gemname.gemspec - builds gem and gives you a file with a version called **_gemname-0.0.0.gem _**or similar

2. Run \$gem install ./gemname-0.0.0.gem - installs gem locally

   1. May need to use sudo to do this

- If you edit the files, then rebuild and reinstall

- If you have external dependencies, then add them to the gemspec file like this: [https://github.com/Shopify/internal_app_engine/blob/master/internal_app.gemspec](https://github.com/Shopify/internal_app_engine/blob/master/internal_app.gemspec)

- Link above is also good for how to add multiple files and folders

## Adding to RubyGems.org

You need to have a verified account with rubygems.org. Once your gem is ready:

1. Run \$gem push gemname-0.0.0.gem

2. You may need to login to your account during this

Also, you can download your credentials by going to [https://rubygems.org/api/v1/api_key.yaml](https://rubygems.org/api/v1/api_key.yaml) and logging in. You then save the .yml file as **_credentials.yml_** in **_~/.gem_**

## List gems

1. Run \$gem list to see all gems and their installed versions

## Uninstall a gem

2. Run \$gem uninstall gemname

   1. If multiple versions, you will get a prompt to ask which or all versions to uninstall

   2. May need to use sudo to do this

---

# CLI-Kit

[https://github.com/Shopify/cli-kit](https://github.com/Shopify/cli-kit)

## Install

\$gem install cli-kit

## Create project

\$cli-kit new myproject -> choose Bundler

## Install dependencies

\$bundle install

## Run application command

Cd to **_myproject_** folder and run \$./exe/myproject

## Add commands

[https://github.com/Shopify/cli-kit](https://github.com/Shopify/cli-kit)

## Add UI elements to make it prettier :)

[https://github.com/Shopify/cli-ui](https://github.com/Shopify/cli-ui)

## When adding to an existing project

1. Modify the Gemfile and add in

gem 'cli-kit', '~> 3.1.0'

gem 'cli-ui', '~> 1.1.4'

group :test do

gem 'mocha', '~> 1.5.0', require: false

gem 'minitest', '>= 5.0.0', require: false

gem 'minitest-reporters', require: false

end

2. Run \$bundle install to install new dependencies

3. Run \$dev up to check bundler and ruby versions

4. Run \$cli-kit new myproject -> this will create a **_myproject_** folder containing all the CLI files.

5. If you wish, you can move the folder within **_myproject/lib_** up to the main **_/lib_** folder - the paths are relative and will keep working

   1. Move the **_lib/myproject_** directory and **_lib/myproject.rb_** file

---

# Byebug

[https://github.com/deivid-rodriguez/byebug/blob/master/GUIDE.md](https://github.com/deivid-rodriguez/byebug/blob/master/GUIDE.md) - command list near bottom of page

## \$ require 'byebug'

Use the byebug object when running your code. This allows you to insert "byebug" in your code wherever you want it to break

E.g. require 'byebug'

## \$ byebug _filename.rb_

Starts byebug on your file, if you don’t want to put ‘byebug" in the code

E.g. byebug filename.rb

## \$ step

Steps through an iteration of code

E.g. step

## \$ _var_name_

Displays a variables value

E.g. _var_name_

## \$ display _var_name_

Displays a variables value as you step through

E.g. display _var_name_

## \$ undisplay *var_name *or undisplay 3

Undisplays the variables you step through

E.g. undisplay _var_name_

## \$ break 5

Create a breakpoint at line 5 of the code

E.g. break 5

## \$ continue

Continue after a breakpoint

E.g. continue

## \$ set linetrace

Turns on line tracing so you can see which lines of code are being executed

E.g. set linetrace

## \$ set basename

Stops the full filename path being displayed, just the filename shows

E.g. set basename

## \$ eval _var_name_

Displays the value of a variable

E.g. eval var_name

## \$ private_methods

Show available private methods

E.g. private_methods

Check if private method included

E.g. private_methods.member?(:hanoi) # => true / false

---

# In Ruby

## puts

Converts to string and print something out, returns nil

E.g. puts "Hi there!"

## p

Print something out, keeps type intact returns value

E.g. p "Hi there!"

## Random Number

rand (optional)

Returns int between 0 and your argument, if not argument returns float between 0 and 1

E.g. rand(100)

E.g. rand

## Replace

String Replace of 1st or all instances

E.g. "Adrian".sub(“A”, “”)

E.g. "Igloo".gsub(“o”, “”)

## Substring (comma, length)

No substring method, uses commas and length

E.g. # Get substring at index 1 with length 3.

# ... First argument is start index, second is length.

last_three = value(1,3)

E.g. # Get substring at index 1 with length 2.

middle_two = value(1,2)

E.g. # Get substring from characters at end of string

last_two = value(-2)

## Substring (ranges and expressions)

No substring method, uses ranges and expressions

E.g. # Get substring at indexes 0 through 3.

# ... This is the first four characters.

first_part = value[0..3]

E.g. # Get substring at indexes 3 through 4.

# ... This is the character at index 3.

second_part = value[2..3]

E.g. # Get substring past index three through end of string.

last_part = value[3..-1]

## Strip (whitespace before and after string)

Removes whitespace before and after string

E.g. string.strip

## Single line comment

Use #

E.g. # my single comment

## Multi line comment

Use =begin and =end

E.g.

=begin

my first line comment

my second line comment

=end

## Looping: do

Use do, end, break, break if

loop do

monk.meditate

break if monk.nirvana?

end

## Looping: times (only on FixNum class)

Use .times to set how many times to do something

n.times do

# do something

end

or

1.upto(10){ |k| puts "Number #{k}"}

or

10.downto(5){ |k| puts "Number #{k}"}

## Looping: for

Use for loop for more control

for num in 1..100

puts num

End

or

for num in 1..100 do

puts "Hello world, this is number #{num}"

end

## Looping: while

Use a while loop to keep going unless a certain condition is met

x = 100

while x > 0

x -= 1

puts "This loop will run #{x} more times"

end

or

x = 100

puts "This loop will run #{x -= 1} more times" while x > 0

## Looping: .each

Use a .each in Ruby, it’s preferred and will work on arrays

(1..100).each do |k|

puts "#{k}. This is Ruby preferred way of doing loops, when possible"

end

or

(1..100).each{ |k| puts "#{k}. Curly braces make it even shorter"}

## Array & Hash looping

.each do |item|

_Code_

end

E.g.

array.each do |item|

puts "The current array item is: #{item}"

end

## Array & Hash looping

.each_pair do |key, value|

_Code_

end

E.g.

array.each_pair do |key, value|

puts "The #{key} is #{value}"

end

## Hash looping

.each_key do |key|

_Code_

end

E.g.

hash.each_key do |key|

puts "The key is #{key}"

end

## Hash looping

.each_value do |value|

_Code_

end

E.g.

hash.each_value do |value|

puts "The value is #{value}"

end

## Hash getting value

Use fetch as it returns either a value when the key is found or a default value if nothing in the hash at that key

.fetch(key, default_return_value)

_Code_

end

E.g.

hash.fetch(key, value)

puts "Nothing found at #{key}, therefore #{value}"

End

or

hsh[letter] = hsh.fetch(letter,0) + 1

## Array & Hash sorting

Use .sort and .reverse for simple numerical and alphabetical sorting. Use .sort_by for complex or multi-dimensional sorting

E.g.

tasks.sort_by{ |t| t.due_date }

or

tasks.sort_by(&:due_date)

or (multi array)

tasks.sort_by{ |t| [t.due_date, t.priority] }

presidents.sort_by{ |hsh| hsh[:last_name] }.reverse

frequencies = frequencies.sort_by {|word, num_times| num_times }

## Regular Expressions

Use .match and .scan - .match returns first instance with match in array key [0] and each () matched group in following array elements. .scan returns all matched instances in an array

E.g. .match

regex = /^(\w*) \w* (\d*) (.*)/

string = "ebu inc 626 if iq < 0"

mtch = string.match(regex)

puts "Matched: " + mtch

puts "Matched the variable: #{mtch[1]}, the number #{mtch[2]}, and the expression #{mtch[3]}"

E.g. .scan

locations = 'Alabama, AL, Alaska, AK, Arizona, AZ, Arkansas, AR, California, CA, Colorado, CO, Connecticut, CT, Delaware, DE, Florida, FL, Georgia, GA, South Dakota, SD'

puts locations.scan(/[A-Z]{2}/).join(', ')

#=> AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, SD

## Open a url and read to variable

require "open-uri"

open and read, open will follow redirects and also has the base_uri property for whatever it finally opened

E.g.

require "open-uri"

page = open(url).read

puts page.base_uri

## Open a file and read, write, close

Open with "w", read, write, close - “File” is not required but good for readability

E.g.

local_file = File.open("tweets-on-hard-drive.xml", "w")

tweets = remote_page.read

local_file.write(tweets)

local_file.close

## Test if something exists

The nil value is the same as null in javascript

E.g.

value.nil?

## Check class

Use is\_ for various class types

E.g.

Value.is_a // print the class

Value.is_a? == FixNum // is this an integer?

Value.is_a? == Float // is this a float?

Value.is_a? == String // is this a string?

puts "That's not an integer." unless n.is_a? Integer

## Change class

Use to\_ for various class types

E.g.

value.to_i // change to integer

value.to_s // change to string

value.to_f // change to float

value.to_a // change to array

## Load a YAML file

Load the contents of a YAML file into a variable

E.g.

require 'yaml'

data = YAML.load_file("data.yaml")

Save to a YAML file

Save the contents of an array to a YAML file

E.g.

require 'yaml'

data = {"name" => "Xavier"}

File.open("path/to/output.yml", "w") {|f| f.write(data.to_yaml) }

---

# References

## All Contents

[http://ruby.bastardsbook.com/toc/](http://ruby.bastardsbook.com/toc/)

## Numbers

[http://ruby.bastardsbook.com/chapters/numbers/](http://ruby.bastardsbook.com/chapters/numbers/)

## Strings

[http://ruby.bastardsbook.com/chapters/strings/](http://ruby.bastardsbook.com/chapters/strings/)

## Arrays (Collections)

[http://ruby.bastardsbook.com/chapters/collections/](http://ruby.bastardsbook.com/chapters/collections/)

## Methods

[http://ruby.bastardsbook.com/chapters/methods/](http://ruby.bastardsbook.com/chapters/methods/)

Control: if / else

[http://ruby.bastardsbook.com/chapters/ifelse/](http://ruby.bastardsbook.com/chapters/ifelse/)

Control: loops

[http://ruby.bastardsbook.com/chapters/loops/](http://ruby.bastardsbook.com/chapters/loops/)

## Regular Expressions

[http://ruby.bastardsbook.com/chapters/regexes/](http://ruby.bastardsbook.com/chapters/regexes/)

[http://rubular.com/](http://rubular.com/)

[https://www.regular-expressions.info/](https://www.regular-expressions.info/)

## Byebug

[https://github.com/deivid-rodriguez/byebug/blob/master/GUIDE.md](https://github.com/deivid-rodriguez/byebug/blob/master/GUIDE.md)

## YAML

    [https://rhnh.net/2011/01/31/yaml-tutorial/](https://rhnh.net/2011/01/31/yaml-tutorial/)
