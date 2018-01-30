class Api::V1::ContactsController < Api::V1::BaseController
  def index
    render json: Contact.order(created_at: :desc)
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      redirect_to admin_contacts_url(@contact), notice: "投稿を作成しました。"
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
      )
    end
end
