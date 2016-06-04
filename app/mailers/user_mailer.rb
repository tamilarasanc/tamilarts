class UserMailer < ActionMailer::Base

  default :from => "tamilarasanc@kreatio.com"

  def user_email(leave)
    @user =leave
    @sender = 'tamilarasanc@kreatio.com'
    @to=@user.email

    # mail(:from=>@sender,:to =>@to,:subject => "Approval Mail")
      mail(:to =>@to,:subject => "Approval Mail")

  end

end
