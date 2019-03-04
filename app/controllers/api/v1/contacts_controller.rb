class Api::V1::ContactsController < Api::V1::BaseController
  def index
    render json: Contact.order(created_at: :desc)
  end

  def enum
    render json: Api::ContactFormItem.new
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      ContactCreatedNotifyJob.perform_later(nickname: @contact.nickname, message: @contact.message)
      head :created
    else
      render :new
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_params
      params.require(:contact).permit(
        :corner,
        :message,
        :nickname,
        :name,
        :department,
        :grade,
        :readable,
      )
    end
end
