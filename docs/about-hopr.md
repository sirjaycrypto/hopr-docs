---
id: about-hopr
title: What is HOPR?
---

The HOPR network is a decentralized and incentivized peer-to-peer network open to anyone who wants to join and run a node. Because of its decentralization, there is no entity that controls it. No one with special administrator rights, no master node or server to control traffic or access. Instead, all the nodes are peers that, through the simple expedient of running the HOPR protocol, work together to run the network in communal fashion.

Decentralization ensures that the network is independent, with no one in a position to unduly influence its development or manipulate outcomes to their advantage. (Not even members of the HOPR Association, who are tasked with managing the network, can control, censor or intercept its traffic.) It also makes the network resilient, able to keep running even if a majority of nodes are damaged or compromised and very difficult, if not impossible, to shut down.

<iframe width="100%" height="415" src="https://www.youtube.com/embed/2ftZdR09KbU" title="HOPR Token and the HOPR Network" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

## Message Layer 

The message layer of the HOPR protocol is designed to send messages – or, to be more technically precise, a “data packet” – from one point in a network to another.  Without revealing from where, from whom or when that packet was sent, or where it is going. This is tricky, analogous to sending a letter without any address on the envelope, expecting it to be delivered to the right place.

HOPRs solution to that: Sending packets directly from point A to B, but rather through a series of intermediate steps that can be described as from A to receiver Z by way of nodes B, C and D. This process is also known as hopping, and gives HOPR its name.

![Packet spliting](/img/core/packet_spliting.gif)
*HOPR gets its name from the fact that it provides metadata privacy by sending data packets through multiple nodes – or “hops” – in the network.*

## Payment Layer

The problem that the HOPR payment layer tackles, is how to reward node operators for forwarding data packets without inadvertently revealing metadata about those packets and so defeating the purpose of the network. This has long been recognized as a serious issue in trying to introduce incentivization for a mixnet. There are those in the academic community who argue that it is impossible to create a completely private/anonymous payment scheme for an incentivized mixnet.

We are very aware of the theoretical, though by no means insignificant, risks involved. However, from the beginning we believed strongly that you cannot have true network-level privacy without a decentralised network. We believe you cannot have a truly decentralized network without a decentralized way to reward node operators for relaying messages, and that it is possible to devise an approach that lowers the risks to a more than acceptable degree.

HOPR is a Swiss-based project started by an experienced team of cryptographers and blockchain experts. The HOPR network is designed to provide network-level privacy both by the use of a messaging protocol that obscures metadata so that individual data packets do not reveal trackable information, and a decentralised network that is managed by its users, so that there is no danger of a controlling entity abusing its power. To compensate individuals for the work of running a node, HOPR also contains a native currency and incentivization scheme.

The details of the payment layer are complex, but at the heart of it lies our proof-of-relay scheme. On a high level, it can be understood as follows: Every time a node operator forwards a packet, they earn the right to receive a payment. Relayers however, only receive half the information they need to try to claim a reward when they receive the packet. They are given the other half when they have successfully forwarded the packet to the next node on the journey.

## Proof of Relay

HOPR’s innovation is to make each consecutive pair of nodes in a chain reliant on each other for payment. This is achieved through a cryptographic technique, but it’s actually simple to understand.

When data is sent through the HOPR network, a payment is generated for each node in the chain. This is locked with a cryptographic key. If you have the whole key, you can claim your payment. But if any part of it is missing, it’s worthless.

![Proof of Relay](/img/core/proof_of_relay.gif)
*As the data passes along the chain, consecutive pairs of nodes swap key halves with each other. This forces everyone to play by the rules.*

This simple but extremely powerful innovation unlocks an entire world of possibilities. With proof of relay, we can finally build a fully incentivized private mixnet that can grow to an unlimited scale, because we don’t have to rely on finding trustworthy altruistic people to run it.

:::info

For more indepth information on HOPR and it’s core concepts, as well as its governance modell and future ambitions, have a look at our [Book of HOPR](https://hoprnet.org/assets/documents/Book_of_HOPR_v1.pdf)

:::

## Node Running

Node runners can stake HOPR tokens in their nodes to be rewarded for this relaying of data. They will receive fees in HOPR for the data they help to pass on, including numerous tokens to be distributed in the form of [cover traffic](core/cover-traffic).

:::info

To install a hoprd node follow [here](node/start-here).

If you already installed a hoprd node, you can follow a simple guide on how to use it, follow [here](node/guide-using-a-hoprd-node).

:::
