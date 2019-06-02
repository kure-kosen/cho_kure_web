class Api::V1::ContactsController < Api::V1::BaseController
  def index
    render json: Contact.order(created_at: :desc)
  end

  def enum
    render json: Api::ContactFormItem.new
  end

  def create
    Contact.create!(contact_params)
    head :created
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_params
      params.permit(
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
