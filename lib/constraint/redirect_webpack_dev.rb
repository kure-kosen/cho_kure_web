module Constraint
  class RedirectWebpackDev
    def self.matches?(request)
      request.format.symbol == :js && !request.path.start_with?("/assets")
    end
  end
end
