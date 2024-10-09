import React from 'react'

interface PodcastDetailsProps {
  params: {
    podcastId: string
  }
}

const PodcastDetails = ({ params }: PodcastDetailsProps) => {
  return (
    <p className="text-white-1">
      PodcastDetails for {params.podcastId}
    </p>
  )
}

export default PodcastDetails
