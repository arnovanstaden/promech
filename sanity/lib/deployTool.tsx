import { useCallback, useState } from 'react'
import { RocketIcon } from '@sanity/icons'
import { Button, Card, Flex, Stack, Text } from '@sanity/ui'
import { definePlugin } from 'sanity'

type TStatus = 'idle' | 'loading' | 'success' | 'error'

function DeployTool() {
  const [status, setStatus] = useState<TStatus>('idle')

  const handleDeploy = useCallback(async () => {
    setStatus('loading')

    try {
      const res = await fetch('/api/deploy', { method: 'POST' })

      if (!res.ok) throw new Error('Deploy request failed')

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }, [])

  return (
    <Card padding={4}>
      <Stack space={4} style={{ maxWidth: 400 }}>
        <Text size={2} weight="semibold">
          Deploy Website
        </Text>
        <Text size={1} muted>
          Trigger a new production build on Vercel to publish the latest content changes.
        </Text>
        <Flex>
          <Button
            text={status === 'loading' ? 'Deploying…' : 'Deploy'}
            tone="positive"
            icon={RocketIcon}
            disabled={status === 'loading'}
            onClick={handleDeploy}
          />
        </Flex>
        {status === 'success' && (
          <Card tone="positive" padding={3} radius={2}>
            <Text size={1}>Deploy triggered — check the Vercel dashboard for build progress.</Text>
          </Card>
        )}
        {status === 'error' && (
          <Card tone="critical" padding={3} radius={2}>
            <Text size={1}>Something went wrong triggering the deploy. Please try again.</Text>
          </Card>
        )}
      </Stack>
    </Card>
  )
}

export const deployTool = definePlugin({
  name: 'deploy-tool',
  tools: (prev) => [
    ...prev,
    {
      name: 'deploy',
      title: 'Deploy',
      icon: RocketIcon,
      component: DeployTool,
    },
  ],
})
