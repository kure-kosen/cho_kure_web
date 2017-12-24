require "mp3info"

module MetaExtractor
  class Mp3
    def initialize(full_path)
      @mp3 = Mp3Info.open(full_path)
    end

    def size
      @mp3.audio_content[1]
    end

    def duration
      @mp3.length.to_i
    end
  end
end
