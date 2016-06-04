class UserController < ApplicationController


    def create

      debugger
      @user = User.new(:name => params[:name], :email => params[:email], :password => params[:password], :mobile_number => params[:mobile])

      @user.save!
      #UserMailer.user_email(@user).deliver
         redirect_to root_url
        flash[:notice] ="Succesfully signed up"

       # render 'update'
    end

    def update

      redirect_to root_url

    end

    def contact
      redirect_to root_url
    end
    def show

    end


    private
    def ad_params
      params.require(:user).permit(:name, :email, :password, :mobile_number, :role_id)
    end

  end
