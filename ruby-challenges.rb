# # ASSESSMENT 5: Ruby Coding Practical Questions
# # MINASWAN

# # --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']


def one_letter array
     array.filter do |element|
     element.include?'o'
     end
end

p one_letter beverages_array


# def one_letter array
#     array.select do |value|
#     value.include?'o'
#     end
# end
# p one_letter beverages_array.map(&:inspect).join(', ')
# # letter_o = 'o'
# # # Expected output: ['coffee', 'soda water']
# # letter_t = 't'
# # # Expected output: ['tea', 'water', 'soda water']

# # Method that takes in array of words and returns the words that contain the letter e

# words = ['hello', 'yo', 'delta', 'learn', 'hola']

# def contains_o array
#   array.select! do |value|
#     value.include?'o'
#   end
#   def shorter_o string
#     array.map {|element|
#     "'{element}'"
#   }.join(',')
# end
# end

# p contains_o beverages_array 


# words = ['hello', 'yo', 'delta', 'LEARN', 'hola']

# def contains_e array
#   array.select do |value|
#     value.include?('e') || value.include?('E')
#   end
# end

# # def contains_e array
# #   array.select do |value|
# #     value.downcase.include?('e')
# #   end
# # end
# #
# # p contains_e words


# # Method that takes in an array of words and returns whether the length of each string is even or odd

# words = ['hello', 'yo', 'delta', 'LEARN', 'hola']

# def even_or_odd_length array
#   array.map do |value|
#     if value.length.even?
#       'even'
#     else
#       'odd'
#     end
#   end
# end

# p even_or_odd_length words



# # -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# # Expected output: 76

nums_array2 = [25, 17, 47, 11]
# # Expected output: 100
#
 def sum_nums array
    array.sum
    end

p sum_nums nums_array1
p sum_nums nums_array2

# or

p nums_array1.inject(0, :+)
p nums_array2.inject(0, :+)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

  
  # -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
  
  # Expected output example: my_bike.pedal_faster(10) => 10
  # Expected output example: my_bike.pedal_faster(10) => 20
  # Expected output example: my_bike.brake(25) => 0
  
  class Bike #make class
    attr_accessor(:model, :wheels, :current_speed) #setter and getter for variables as symbols
    def initialize(model) #initialize each parameter that doesn't have a default value
      @model = model
      @wheels = 2 #default value
      @current_speed = 0 #default value
    end
    def bike_info #name a method that outputs values in sentence
      #string interpolation
      p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster value #argument will be the value given
      p @current_speed += value #current speed will become the addition of the value
    end
    def brake value
      if(@current_speed - value < 0)# conditional to state any negatives will equal 0
        p @current_speed = 0
      else
        p @current_speed -= value #otherwise current speed will be the difference of the value
      end
    end
  end
  my_bike = Bike.new 'Trek' #make a new instance with the expected arguments
  my_bike.pedal_faster(10) #call the method on the object
  my_bike.pedal_faster(10)  #each call should update the new object
  my_bike.brake(25)
