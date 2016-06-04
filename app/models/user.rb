class User < ActiveRecord::Base


  validates_presence_of :name
  validates_presence_of :password
  validates_presence_of :email
  validates_presence_of :mobile_number




  # def encrypt_password
  #
  #
  #   if self.password.present?
  #     self.password = BCrypt::Engine.generate_salt
  #     # self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
  #   end
  # end



end
