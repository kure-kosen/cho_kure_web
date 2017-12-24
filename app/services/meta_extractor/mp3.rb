require "mp3info"
require "open-uri"

module MetaExtractor
  class Mp3
    def initialize(file)
      @mp3 = Mp3Info.open(
        if file.class == CarrierWave::SanitizedFile
          # For Local saved file
          file.file
        else # For Another cloud saved file
          open(file.url)
        end,
      )
    end

    def size
      @mp3.audio_content[1]
    end

    def duration
      @mp3.length.to_i
    end
  end
end
